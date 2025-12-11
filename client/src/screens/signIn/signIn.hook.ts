import { INPUTS, MODALS, PAGES } from "@constants";
import {
  FormsHelper,
  TextHelper,
  useDidMount,
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
import React, { useCallback } from "react";

type SignInForm = {
  nameError?: string;
  emailError?: string;
  phoneError?: string;
  passwordError?: string;
  passwordConfirmationError?: string;
};

export const useSignInPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const { createAccount, isAuthenticated } = useAuthentication();
  const storeAuthForm = useStoreAuthentication((state) => state.form);
  const { returnPage } = useAppSearchParams();
  const { showItem } = useFeedback();

  const [form, setForm] = React.useState<SignInForm>({});
  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("signIn.title"),
      name: {
        title: t("signIn.form.name.title"),
        placeholder: t("signIn.form.name.placeholder"),
        errors: {
          default: t("signIn.form.name.error.default"),
          length: t("signIn.form.name.error.length"),
        },
      },
      email: {
        title: t("signIn.form.email.title"),
        placeholder: t("signIn.form.email.placeholder"),
        errors: {
          default: t("signIn.form.email.error.default"),
          alreadyInUse: t("signIn.form.email.error.alreadyInUse"),
        },
      },
      phone: {
        title: t("signIn.form.phone.title"),
        placeholder: t("signIn.form.phone.placeholder"),
        errors: {
          default: t("signIn.form.phone.error.default"),
          alreadyInUse: t("signIn.form.phone.error.alreadyInUse"),
        },
      },
      password: {
        title: t("signIn.form.password.title"),
        placeholder: t("signIn.form.password.placeholder"),
        errors: {
          length: t("signIn.form.password.error.length"),
        },
      },
      passwordConfirm: {
        title: t("signIn.form.passwordConfirm.title"),
        placeholder: t("signIn.form.passwordConfirm.placeholder"),
        errors: {
          noMatch: t("signIn.form.passwordConfirm.error.noMatch"),
        },
      },
      actions: {
        signIn: t("signIn.form.actions.submit"),
      },
    };
  }, [t]);

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.NAME,
          minLengthValidation: {
            value: 2,
            errorMessage: i18n.name.errors.length,
          },
          validations: [
            (value) => {
              if (!TextHelper.isValidName(value as string)) {
                return i18n.name.errors.default;
              }

              return undefined;
            },
          ],
        },
        {
          name: INPUTS.EMAIL,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.email.errors.default,
          },
          validations: [
            (value) => {
              if (!TextHelper.isEmail(value as string)) {
                return i18n.email.errors.default;
              }

              return undefined;
            },
          ],
        },
        {
          name: INPUTS.PHONE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.email.errors.default,
          },
          validations: [
            (value) => {
              if (!TextHelper.isPhoneNumber(value as string)) {
                return i18n.phone.errors.default;
              }

              return undefined;
            },
          ],
        },
        {
          name: INPUTS.PASSWORD,
          minLengthValidation: {
            value: 8,
            errorMessage: i18n.password.errors.length,
          },
        },
      ];
    }, [
      i18n.email.errors.default,
      i18n.name.errors.default,
      i18n.name.errors.length,
      i18n.password.errors.length,
      i18n.phone.errors.default,
    ]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const name = FormsHelper.getField(data, INPUTS.NAME);
      const email = FormsHelper.getField(data, INPUTS.EMAIL);
      const phoneNumber = FormsHelper.getField(data, INPUTS.PHONE);
      const password = FormsHelper.getField(data, INPUTS.PASSWORD);
      const passwordConfirmation = FormsHelper.getField(
        data,
        INPUTS.PASSWORD_CONFIRMATION
      );

      if (
        passwordConfirmation &&
        FormsHelper.getFieldValueOrDefault(password, "") !==
          FormsHelper.getFieldValueOrDefault(passwordConfirmation, "")
      ) {
        passwordConfirmation.error = i18n.passwordConfirm.errors.noMatch;
      }

      setForm((prevState) => ({
        ...prevState,
        nameError: name?.error,
        emailError: email?.error,
        phoneError: phoneNumber?.error,
        passwordError: password?.error,
        passwordConfirmationError: passwordConfirmation?.error,
      }));

      if (
        !name?.error &&
        !email?.error &&
        !phoneNumber?.error &&
        !password?.error &&
        !passwordConfirmation?.error
      ) {
        const res = await createAccount({
          name: FormsHelper.getFieldValueOrDefault(name, ""),
          password: FormsHelper.getFieldValueOrDefault(password, ""),
          phoneNumber: FormsHelper.getFieldValueOrDefault(phoneNumber, ""),
          email: FormsHelper.getFieldValueOrDefault(email, ""),
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
          if (res.data.mailAlreadyInUse || res.data.phoneAlreadyInUse) {
            setForm((prevState) => ({
              ...prevState,
              emailError: res.data.mailAlreadyInUse
                ? i18n.email.errors.alreadyInUse
                : undefined,
              phoneError: res.data.phoneAlreadyInUse
                ? i18n.phone.errors.alreadyInUse
                : undefined,
            }));
          } else {
            showItem(MODALS.GENERIC_API_ERROR);
          }
        }
        // submitReview(score, title, description);
      }

      setLoading(false);
    },
    [
      createAccount,
      goTo,
      i18n.email.errors.alreadyInUse,
      i18n.passwordConfirm.errors.noMatch,
      i18n.phone.errors.alreadyInUse,
      returnPage.value,
      showItem,
    ]
  );

  const initScreen = useCallback(() => {
    if (isAuthenticated) {
      goTo({
        path: PAGES.HOME,
      });
    }
  }, [goTo, isAuthenticated]);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
    loading,
    onClickSubmit,
    form,
    formConfiguration: getFormConfiguration(),
    initialValues: {
      email: storeAuthForm?.email,
      phone: storeAuthForm?.phone,
    },
  };
};
