import { INPUTS } from "@constants";
import { type FormFieldOutputData } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useAuthentication } from "@hooks";
import React from "react";
import type { SignInOrLoginTemplateProps } from "./signInOrLoginTemplate";

type SignInForm = {
  nameError?: string;
  emailOrPhoneError?: string;
  emailError?: string;
  phoneError?: string;
  passwordError?: string;
};

type FormStep = "loginOrSignUp" | "signUp" | "logIn";

export const useSignInOrLoginTemplateHelper = ({
  onCreateAccount,
  onLogIn,
}: SignInOrLoginTemplateProps) => {
  const { t } = useAppTranslations();
  const { createAccount, isExistingAccount, authenticate } =
    useAuthentication();

  const [form, setForm] = React.useState<SignInForm>({});
  const [loading, setLoading] = React.useState(true);
  const [step, setStep] = React.useState<FormStep>("loginOrSignUp");

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

  const onClickSubmitLogin = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const name = data.find((d) => d.name === INPUTS.NAME)?.value as string;
      const email = data.find((d) => d.name === INPUTS.EMAIL)?.value as string;
      const phoneNumber = data.find((d) => d.name === INPUTS.PHONE)
        ?.value as string;
      const password = data.find((d) => d.name === INPUTS.PASSWORD)
        ?.value as string;
      const passwordConfirmation = data.find(
        (d) => d.name === INPUTS.PASSWORD_CONFIRMATION
      )?.value as string;

      const nameError = !name ? i18n.name.error : undefined;
      const emailError = !email ? i18n.email.error : undefined;
      const phoneError = !phoneNumber ? i18n.phone.error : undefined;
      const passwordError = !password ? i18n.password.error : undefined;
      const passwordConfirmationError = !passwordConfirmation
        ? i18n.passwordConfirm.error
        : undefined;

      setForm((prevState) => ({
        ...prevState,
        nameError,
        emailError,
        phoneError,
        passwordError,
        passwordConfirmationError,
      }));

      if (
        !nameError &&
        !emailError &&
        !phoneError &&
        !passwordError &&
        !passwordConfirmationError
      ) {
        const res = await authenticate({
          password,
          phoneNumber,
          email,
        });

        if (res) {
          onLogIn?.();
        }
      }

      setLoading(false);
    },
    [
      authenticate,
      i18n.email.error,
      i18n.name.error,
      i18n.password.error,
      i18n.passwordConfirm.error,
      i18n.phone.error,
      onLogIn,
    ]
  );

  const onClickSubmitSignUp = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const name = data.find((d) => d.name === INPUTS.NAME)?.value as string;
      const email = data.find((d) => d.name === INPUTS.EMAIL)?.value as string;
      const phoneNumber = data.find((d) => d.name === INPUTS.PHONE)
        ?.value as string;
      const password = data.find((d) => d.name === INPUTS.PASSWORD)
        ?.value as string;
      const passwordConfirmation = data.find(
        (d) => d.name === INPUTS.PASSWORD_CONFIRMATION
      )?.value as string;

      const nameError = !name ? i18n.name.error : undefined;
      const emailError = !email ? i18n.email.error : undefined;
      const phoneError = !phoneNumber ? i18n.phone.error : undefined;
      const passwordError = !password ? i18n.password.error : undefined;
      const passwordConfirmationError = !passwordConfirmation
        ? i18n.passwordConfirm.error
        : undefined;

      setForm((prevState) => ({
        ...prevState,
        nameError,
        emailError,
        phoneError,
        passwordError,
        passwordConfirmationError,
      }));

      if (
        !nameError &&
        !emailError &&
        !phoneError &&
        !passwordError &&
        !passwordConfirmationError
      ) {
        const res = await createAccount({
          name,
          password,
          phoneNumber,
          email,
        });

        if (res) {
          onCreateAccount?.();
        }
      }

      setLoading(false);
    },
    [
      createAccount,
      i18n.email.error,
      i18n.name.error,
      i18n.password.error,
      i18n.passwordConfirm.error,
      i18n.phone.error,
      onCreateAccount,
    ]
  );

  const onClickSubmitEmailOrPhone = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = data.find((d) => d.name === INPUTS.PHONE_OR_EMAIL)
        ?.value as string;

      const emailOrPhoneError = !emailOrPhone ? i18n.email.error : undefined;

      setForm((prevState) => ({
        ...prevState,
        emailOrPhoneError,
      }));

      if (!emailOrPhoneError) {
        const res = await isExistingAccount({
          email: "",
          phoneNumber: "",
        });

        if (res) {
          setStep("logIn");
        } else {
          setStep("signUp");
        }
      }

      setLoading(false);
    },
    [i18n.email.error, isExistingAccount]
  );

  return {
    i18n,
    loading,
    onClickSubmitSignUp,
    onClickSubmitEmailOrPhone,
    onClickSubmitLogin,
    form,
    step,
  };
};
