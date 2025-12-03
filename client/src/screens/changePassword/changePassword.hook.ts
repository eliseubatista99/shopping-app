import { Api } from "@api";
import { INPUTS, PAGES, TOASTS } from "@constants";
import {
  useFeedback,
  useNavigation,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

type ChangePoneForm = {
  currentPasswordError?: string;
  passwordError?: string;
};

export const useChangePasswordPageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = Api.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreBase((state) => state.client);
  const setClientInfo = useStoreBase((state) => state.setClientInfo);

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

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const currentPassword = data.find((d) => d.name === INPUTS.PASSWORD)
        ?.value as string;
      const password = data.find((d) => d.name === INPUTS.NEW_PASSWORD)
        ?.value as string;
      const passwordConfirm = data.find(
        (d) => d.name === INPUTS.PASSWORD_CONFIRMATION
      )?.value as string;

      const currentPasswordError = !currentPassword
        ? i18n.current.error
        : undefined;

      let passwordError = !password ? i18n.password.errors.invalid : undefined;

      if (password !== passwordConfirm) {
        passwordError = i18n.password.errors.noMatch;
      } else if (password === currentPassword) {
        passwordError = i18n.password.errors.sameAsCurrent;
      }

      setForm((prevState) => ({
        ...prevState,
        currentPasswordError,
        passwordError,
      }));

      if (!currentPasswordError && !passwordError) {
        const res = await fetchUpdateClientInfo({
          password,
        });

        if (res.metadata.success) {
          setClientInfo(res.data.updatedInfo);

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
      i18n,
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
  };
};
