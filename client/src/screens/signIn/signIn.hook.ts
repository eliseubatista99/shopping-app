import { Api } from "@api";
import { INPUTS, PAGES } from "@constants";
import {
  useNavigation,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { ApiHelper } from "@helpers";
import { useAppTranslations } from "@hooks";
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
  const { fetchCreateAccount } = Api.CreateAccount();

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

  const onClickSubmit = React.useCallback(
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

      console.log("ZAU", { data });

      if (
        !nameError &&
        !emailError &&
        !phoneError &&
        !passwordError &&
        !passwordConfirmationError
      ) {
        const res = await fetchCreateAccount({
          name,
          password,
          phoneNumber,
          email,
        });

        if (res.metadata.success) {
          ApiHelper.setToken(res.data.token);
          goTo({
            path: PAGES.HOME,
            addToHistory: false,
          });
        }
        console.log("ZAU", { res });
        // submitReview(score, title, description);
      }

      setLoading(false);
    },
    [
      fetchCreateAccount,
      goTo,
      i18n.email.error,
      i18n.name.error,
      i18n.password.error,
      i18n.passwordConfirm.error,
      i18n.phone.error,
    ]
  );

  return {
    i18n,
    loading,
    onClickSubmit,
    form,
  };
};
