import { INPUTS, PAGES } from "@constants";
import {
  FormsHelper,
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

type SignInForm = {
  emailOrPhoneError?: string;
  passwordError?: string;
};

export const useLogInPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const { authenticate } = useAuthentication();
  const storeAuthForm = useStoreAuthentication((state) => state.form);
  const { returnPage } = useAppSearchParams();

  const [form, setForm] = React.useState<SignInForm>({});
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
        error: t("logIn.form.emailOrPhone.error"),
      },
      password: {
        title: t("logIn.form.password.title"),
        placeholder: t("logIn.form.password.placeholder"),
        error: t("logIn.form.password.error"),
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
            errorMessage: i18n.emailOrPhone.error,
          },
        },
        {
          name: INPUTS.PASSWORD,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.error,
          },
        },
      ];
    }, [i18n.emailOrPhone.error, i18n.password.error]);

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
        const res = await authenticate({
          password: FormsHelper.getFieldValueOrDefault(password, ""),
          phoneNumber: "",
          email: "",
        });

        if (res.success) {
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
        }
      }

      setLoading(false);
    },
    [authenticate, goTo, returnPage.value]
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
