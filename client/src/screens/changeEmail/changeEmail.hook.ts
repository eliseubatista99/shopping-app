import { Api } from "@api";
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

export const useChangeEmailPageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = Api.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreClient((state) => state.client);
  const setClientInfo = useStoreClient((state) => state.setClientInfo);
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

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.EMAIL,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.email.error,
          },
        },
      ];
    }, [i18n.email.error]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const email = FormsHelper.getField(data, INPUTS.EMAIL);

      setError(email?.error);

      if (!email?.error) {
        const res = await fetchUpdateClientInfo({
          email: FormsHelper.getFieldValueOrDefault(email, ""),
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
    formConfiguration: getFormConfiguration(),
  };
};
