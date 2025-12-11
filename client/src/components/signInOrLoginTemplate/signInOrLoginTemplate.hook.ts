import { Api } from "@api";
import { INPUTS } from "@constants";
import {
  FormsHelper,
  TextHelper,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAuthentication } from "@store";
import React from "react";
import type { SignInOrLoginTemplateProps } from "./signInOrLoginTemplate";

export const useSignInOrLoginTemplateHelper = ({
  onSubmit,
}: SignInOrLoginTemplateProps) => {
  const { t } = useAppTranslations();
  const { fetchIsExistingAccount } = Api.IsExistingAccount();
  const setAuthenticationStoreState = useStoreAuthentication(
    (state) => state.setAuthenticationStoreState
  );

  const [emailOrPhoneError, setEmailOrPhoneError] = React.useState<
    string | undefined
  >();
  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("signUpOrLoginTemplate.title"),
      emailOrPhone: {
        title: t("signUpOrLoginTemplate.form.emailOrPhone.title"),
        placeholder: t("signUpOrLoginTemplate.form.emailOrPhone.placeholder"),
        error: t("signUpOrLoginTemplate.form.emailOrPhone.error"),
      },
      actions: {
        signIn: t("signUpOrLoginTemplate.form.actions.submit"),
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
          validations: [
            (value) => {
              const isEmail = TextHelper.isEmail(value as string);
              const isPhone = TextHelper.isPhoneNumber(value as string);

              if (!isEmail && !isPhone) {
                return i18n.emailOrPhone.error;
              }

              return undefined;
            },
          ],
        },
      ];
    }, [i18n.emailOrPhone.error]);

  const onClickSubmitEmailOrPhone = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const emailOrPhone = FormsHelper.getField(data, INPUTS.PHONE_OR_EMAIL);

      setEmailOrPhoneError(emailOrPhone?.error);

      if (!emailOrPhone?.error) {
        const emailOrPhoneValue = FormsHelper.getFieldValueOrDefault(
          emailOrPhone,
          ""
        );
        const isEmail = TextHelper.isEmail(emailOrPhoneValue);
        const isPhone = TextHelper.isPhoneNumber(emailOrPhoneValue);

        const res = await fetchIsExistingAccount({
          email: isEmail ? emailOrPhoneValue : undefined,
          phoneNumber: isPhone ? emailOrPhoneValue : undefined,
        });

        if (res.metadata.success) {
          setAuthenticationStoreState({
            form: {
              email: isEmail ? emailOrPhoneValue : undefined,
              phone: isPhone ? emailOrPhoneValue : undefined,
            },
          });

          onSubmit?.({
            step: res.data.exists ? "login" : "signUp",
          });
        }
      }

      setLoading(false);
    },
    [fetchIsExistingAccount, onSubmit, setAuthenticationStoreState]
  );

  return {
    i18n,
    loading,
    formConfiguration: getFormConfiguration(),
    onClickSubmitEmailOrPhone,
    emailOrPhoneError,
  };
};
