import { INPUTS, MODALS, PAGES } from "@constants";
import {
  FormsHelper,
  TextHelper,
  useFeedback,
  useNavigation,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import {
  useAppSearchParams,
  useAppTranslations,
  useAuthentication,
} from "@hooks";
import { useStoreAuthentication } from "@store";
import React from "react";

type LoginInForm = {
  emailOrPhoneError?: string;
  passwordError?: string;
};

export const useFormBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const { authenticate } = useAuthentication();
  const storeAuthForm = useStoreAuthentication((state) => state.form);
  const { returnPage } = useAppSearchParams();
  const { showItem } = useFeedback();

  const [form, setForm] = React.useState<LoginInForm>({});
  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("logIn.title"),
      name: {
        title: t("logIn.form.name.title"),
        placeholder: t("logIn.form.name.placeholder"),
        error: t("logIn.form.name.error"),
      },
      emailOrPhone: {
        title: t("logIn.form.emailOrPhone.title"),
        placeholder: t("logIn.form.emailOrPhone.placeholder"),
        errors: {
          default: t("logIn.form.emailOrPhone.error.default"),
          wrongEmail: t("logIn.form.emailOrPhone.error.wrongEmail"),
          wrongPhone: t("logIn.form.emailOrPhone.error.wrongPhone"),
        },
      },
      password: {
        title: t("logIn.form.password.title"),
        placeholder: t("logIn.form.password.placeholder"),
        errors: {
          default: t("logIn.form.password.error.default"),
          wrong: t("logIn.form.password.error.wrong"),
        },
      },
      actions: {
        signIn: t("logIn.form.actions.submit"),
      },
    };
  }, [t]);

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.PHONE_OR_EMAIL,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.emailOrPhone.errors.default,
          },
          validations: [
            (value) => {
              const isEmail = TextHelper.isEmail(value as string);
              const isPhone = TextHelper.isPhoneNumber(value as string);

              if (!isEmail && !isPhone) {
                return i18n.emailOrPhone.errors.default;
              }

              return undefined;
            },
          ],
        },
        {
          name: INPUTS.PASSWORD,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.errors.default,
          },
        },
      ];
    }, [i18n.emailOrPhone.errors.default, i18n.password.errors.default]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = FormsHelper.getField(data, INPUTS.PHONE_OR_EMAIL);
      const password = FormsHelper.getField(data, INPUTS.PASSWORD);

      setForm((prevState) => ({
        ...prevState,
        emailOrPhoneError: emailOrPhone?.error,
        passwordError: password?.error,
      }));

      if (!emailOrPhone?.error && !password?.error) {
        const emailOrPhoneValue = FormsHelper.getFieldValueOrDefault(
          emailOrPhone,
          ""
        );
        const isEmail = TextHelper.isEmail(emailOrPhoneValue);
        const isPhone = TextHelper.isPhoneNumber(emailOrPhoneValue);

        const res = await authenticate({
          password: FormsHelper.getFieldValueOrDefault(password, ""),
          email: isEmail ? emailOrPhoneValue : undefined,
          phoneNumber: isPhone ? emailOrPhoneValue : undefined,
        });

        if (res.metadata.success) {
          if (returnPage.value) {
            goTo({
              path: returnPage.value,
              addToHistory: false,
            });
          } else {
            goTo({
              path: PAGES.HOME,
              addToHistory: false,
            });
          }
        } else {
          if (res.data.invalidEmail) {
            setForm((prevState) => ({
              ...prevState,
              emailOrPhoneError: i18n.emailOrPhone.errors.wrongEmail,
            }));
          } else if (res.data.invalidPhone) {
            setForm((prevState) => ({
              ...prevState,
              emailOrPhoneError: i18n.emailOrPhone.errors.wrongPhone,
            }));
          } else if (res.data.wrongPassword) {
            setForm((prevState) => ({
              ...prevState,
              passwordError: i18n.password.errors.wrong,
            }));
          } else {
            showItem(MODALS.GENERIC_API_ERROR);
          }
        }
      }

      setLoading(false);
    },
    [
      authenticate,
      goTo,
      i18n.emailOrPhone.errors.wrongEmail,
      i18n.emailOrPhone.errors.wrongPhone,
      i18n.password.errors.wrong,
      returnPage.value,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    onClickSubmit,
    form,
    formConfiguration: getFormConfiguration(),
    initialValue: storeAuthForm?.email || storeAuthForm?.phone || "",
  };
};
