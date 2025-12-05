import { INPUTS, PAGES } from "@constants";
import {
  useNavigation,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import {
  useAppSearchParams,
  useAppTranslations,
  useAuthentication,
} from "@hooks";
import React from "react";

type SignInForm = {
  emailOrPhoneError?: string;
  passwordError?: string;
};

export const useLogInPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const { authenticate } = useAuthentication();
  const { returnPage } = useAppSearchParams();

  const [form, setForm] = React.useState<SignInForm>({});
  const [loading, setLoading] = React.useState(true);

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

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = data.find((d) => d.name === INPUTS.PHONE_OR_EMAIL)
        ?.value as string;
      const password = data.find((d) => d.name === INPUTS.PASSWORD)
        ?.value as string;

      const emailOrPhoneError = !emailOrPhone
        ? i18n.emailOrPhone.error
        : undefined;
      const passwordError = !password ? i18n.password.error : undefined;

      setForm((prevState) => ({
        ...prevState,
        emailOrPhoneError,
        passwordError,
      }));

      if (!emailOrPhoneError && !passwordError) {
        const res = await authenticate({
          password,
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
        // submitReview(score, title, description);
      }

      setLoading(false);
    },
    [authenticate, goTo, i18n.emailOrPhone.error, i18n.password.error]
  );

  return {
    i18n,
    loading,
    onClickSubmit,
    form,
  };
};
