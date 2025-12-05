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

export const useChangeEmailPageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = Api.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreBase((state) => state.client);
  const setClientInfo = useStoreBase((state) => state.setClientInfo);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>();

  const i18n = React.useMemo(() => {
    return {
      title: t("changeEmail.title"),
      current: t("changeEmail.current"),
      subtitle: t("changeEmail.subtitle"),
      email: {
        placeholder: t("changeEmail.email.placeholder"),
        error: t("changeEmail.email.error"),
      },
      actions: {
        submit: t("changeEmail.actions.submit"),
      },
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const email = data.find((d) => d.name === INPUTS.EMAIL)?.value as string;

      const emailError = !email ? i18n.email.error : undefined;

      setError(emailError);

      if (!emailError) {
        const res = await fetchUpdateClientInfo({
          email,
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
      i18n.email.error,
      setClientInfo,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    error,
    onClickSubmit,
    client,
  };
};
