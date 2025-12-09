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
import React from "react";

type SignInForm = {
  nameError?: string;
  emailError?: string;
  phoneError?: string;
  passwordError?: string;
};

export const useSignInPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const { createAccount } = useAuthentication();
  const { returnPage } = useAppSearchParams();

  const [form, setForm] = React.useState<SignInForm>({});
  const [loading, setLoading] = React.useState(true);

  const i18n = React.useMemo(() => {
    return {
      title: t("signIn.title"),
      name: {
        title: t("signIn.form.name.title"),
        placeholder: t("signIn.form.name.placeholder"),
        error: t("signIn.form.name.error"),
      },
      email: {
        title: t("signIn.form.email.title"),
        placeholder: t("signIn.form.email.placeholder"),
        error: t("signIn.form.email.error"),
      },
      phone: {
        title: t("signIn.form.phone.title"),
        placeholder: t("signIn.form.phone.placeholder"),
        error: t("signIn.form.phone.error"),
      },
      password: {
        title: t("signIn.form.password.title"),
        placeholder: t("signIn.form.password.placeholder"),
        error: t("signIn.form.password.error"),
      },
      passwordConfirm: {
        title: t("signIn.form.passwordConfirm.title"),
        placeholder: t("signIn.form.passwordConfirm.placeholder"),
        error: t("signIn.form.passwordConfirm.error"),
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
          emptyValidation: {
            allow: false,
            errorMessage: i18n.name.error,
          },
        },
        {
          name: INPUTS.EMAIL,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.email.error,
          },
        },
        {
          name: INPUTS.PHONE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.phone.error,
          },
        },
        {
          name: INPUTS.PASSWORD,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.error,
          },
        },
        {
          name: INPUTS.PASSWORD_CONFIRMATION,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.passwordConfirm.error,
          },
        },
      ];
    }, [
      i18n.email.error,
      i18n.name.error,
      i18n.password.error,
      i18n.passwordConfirm.error,
      i18n.phone.error,
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
        // submitReview(score, title, description);
      }

      setLoading(false);
    },
    [createAccount, goTo, returnPage.value]
  );

  return {
    i18n,
    loading,
    onClickSubmit,
    form,
    formConfiguration: getFormConfiguration(),
  };
};
