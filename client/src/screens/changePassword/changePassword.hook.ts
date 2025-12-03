import { Api } from "@api";
import { INPUTS, PAGES } from "@constants";
import {
  useNavigation,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useChangePasswordPageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = Api.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const setClientInfo = useStoreBase((state) => state.setClientInfo);

  const [loading, setLoading] = React.useState(true);
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

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const name = data.find((d) => d.name === INPUTS.NAME)?.value as string;

      const nameError = !name ? i18n.name.error : undefined;

      setError(nameError);

      if (!nameError) {
        const res = await fetchUpdateClientInfo({
          name,
        });

        if (res.metadata.success) {
          setClientInfo(res.data.updatedInfo);

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
      i18n.name.error,
      setClientInfo,
    ]
  );

  return {
    i18n,
    loading,
    error,
    onClickSubmit,
  };
};
