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

export const useChangeNamePageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = ApiEndpoints.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreClient((state) => state.client);
  const setClientInfo = useStoreClient((state) => state.setClientInfo);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>();

  const i18n = React.useMemo(() => {
    return {
      title: t("changeName.title"),
      subtitle: t("changeName.subtitle"),
      name: {
        placeholder: t("changeName.name.placeholder"),
        error: t("changeName.name.error"),
      },
      actions: {
        submit: t("changeName.actions.submit"),
      },
    };
  }, [t]);

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.NAME,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.name.error,
          },
        },
      ];
    }, [i18n.name.error]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const name = FormsHelper.getField(data, INPUTS.NAME);

      setError(name?.error);

      if (!name?.error) {
        const res = await fetchUpdateClientInfo({
          name: FormsHelper.getFieldValueOrDefault(name, ""),
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
