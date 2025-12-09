import { INPUTS } from "@constants";
import {
  FormsHelper,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
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
      ];
    }, [i18n.emailOrPhone.error]);

  const onClickSubmitEmailOrPhone = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = FormsHelper.getField(data, INPUTS.PHONE_OR_EMAIL);

      setEmailOrPhoneError(emailOrPhone?.error);

      if (!emailOrPhone?.error) {
        const res = await isExistingAccount({
          email: "",
          phoneNumber: "",
        });

        onSubmit?.(res ? "login" : "signUp");
      }

      setLoading(false);
    },
    [isExistingAccount, onSubmit]
  );

  return {
    i18n,
    loading,
    formConfiguration: getFormConfiguration(),
    onClickSubmitEmailOrPhone,
    emailOrPhoneError,
  };
};
