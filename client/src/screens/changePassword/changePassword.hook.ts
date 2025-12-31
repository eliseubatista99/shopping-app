import { ApiEndpoints } from "@api";
import { INPUTS, PAGES, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
  useNavigation,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreClient } from "@store";
import React from "react";

type ChangePoneForm = {
  currentPasswordError?: string;
  passwordError?: string;
};

export const useChangePasswordPageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = ApiEndpoints.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreClient((state) => state.client);
  const setClientInfo = useStoreClient((state) => state.setClientInfo);

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<ChangePoneForm>({});

  const i18n = React.useMemo(() => {
    return {
      title: t("changePassword.title"),
      subtitle: t("changePassword.subtitle"),
      current: {
        placeholder: t("changePassword.current.placeholder"),
        error: t("changePassword.current.error"),
      },
      password: {
        placeholder: t("changePassword.password.placeholder"),
        errors: {
          invalid: t("changePassword.password.error.invalid"),
          noMatch: t("changePassword.password.error.noMatch"),
          sameAsCurrent: t("changePassword.password.error.sameAsCurrent"),
        },
      },
      confirmPassword: {
        placeholder: t("changePassword.confirmPassword.placeholder"),
      },
      actions: {
        submit: t("changePassword.actions.submit"),
      },
    };
  }, [t]);

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.PASSWORD,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.errors.invalid,
          },
        },
        {
          name: INPUTS.NEW_PASSWORD,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.errors.invalid,
          },
        },
        {
          name: INPUTS.PASSWORD_CONFIRMATION,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.password.errors.invalid,
          },
        },
      ];
    }, [i18n.password.errors.invalid]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const currentPassword = FormsHelper.getField(data, INPUTS.PASSWORD);
      const password = FormsHelper.getField(data, INPUTS.NEW_PASSWORD);
      const passwordConfirm = FormsHelper.getField(
        data,
        INPUTS.PASSWORD_CONFIRMATION
      );

      if (
        password &&
        passwordConfirm &&
        FormsHelper.getFieldValueOrDefault(password, "") !==
          FormsHelper.getFieldValueOrDefault(passwordConfirm, "")
      ) {
        password.error = i18n.password.errors.noMatch;
      } else if (
        password &&
        currentPassword &&
        FormsHelper.getFieldValueOrDefault(password, "") ===
          FormsHelper.getFieldValueOrDefault(currentPassword, "")
      ) {
        password.error = i18n.password.errors.sameAsCurrent;
      }

      setForm((prevState) => ({
        ...prevState,
        currentPasswordError: currentPassword?.error,
        passwordError: password?.error,
      }));

      if (
        !currentPassword?.error &&
        !password?.error &&
        !passwordConfirm?.error
      ) {
        const res = await fetchUpdateClientInfo({
          password: FormsHelper.getFieldValueOrDefault(password, ""),
        });

        if (res.metadata?.success && res.data?.updatedInfo) {
          setClientInfo(res.data?.updatedInfo);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          if (history.length > 0) {
            goBack();
          } else {
            goTo({
              path: PAGES.SIGN_IN_AND_SECURITY,
              addToHistory: false,
            });
          }
        }
      }

      setLoading(false);
    },
    [
      fetchUpdateClientInfo,
      goBack,
      goTo,
      history.length,
      i18n.password.errors.noMatch,
      i18n.password.errors.sameAsCurrent,
      setClientInfo,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
    client,
    formConfiguration: getFormConfiguration(),
  };
};
