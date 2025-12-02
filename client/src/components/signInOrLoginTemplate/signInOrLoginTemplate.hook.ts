import { INPUTS } from "@constants";
import { type FormFieldOutputData } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useAuthentication } from "@hooks";
import React from "react";
import type { SignInOrLoginTemplateProps } from "./signInOrLoginTemplate";

export const useSignInOrLoginTemplateHelper = ({
  onSubmit,
}: SignInOrLoginTemplateProps) => {
  const { t } = useAppTranslations();
  const { isExistingAccount } = useAuthentication();

  const [emailOrPhoneError, setEmailOrPhoneError] = React.useState<
    string | undefined
  >();
  const [loading, setLoading] = React.useState(true);

  const i18n = React.useMemo(() => {
    return {
      title: t("signUpOrLogin.title"),

      emailOrPhone: {
        title: t("signUpOrLogin.form.emailOrPhone.title"),
        placeholder: t("signUpOrLogin.form.emailOrPhone.placeholder"),
        error: t("signUpOrLogin.form.emailOrPhone.error"),
      },

      actions: {
        signIn: t("signIn.form.actions.submit"),
      },
    };
  }, [t]);

  const onClickSubmitEmailOrPhone = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = data.find((d) => d.name === INPUTS.PHONE_OR_EMAIL)
        ?.value as string;

      const err = !emailOrPhone ? i18n.emailOrPhone.error : undefined;

      setEmailOrPhoneError(err);

      if (!emailOrPhoneError) {
        const res = await isExistingAccount({
          email: "",
          phoneNumber: "",
        });

        onSubmit?.(res ? "login" : "signUp");
      }

      setLoading(false);
    },
    [emailOrPhoneError, i18n.emailOrPhone.error, isExistingAccount, onSubmit]
  );

  return {
    i18n,
    loading,
    onClickSubmitEmailOrPhone,
    emailOrPhoneError,
  };
};
