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
  phoneError?: string;
  prefixError?: string;
};

export const useChangePhonePageHelper = () => {
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
      title: t("changePhone.title"),
      current: t("changePhone.current"),
      subtitle: t("changePhone.subtitle"),
      prefix: {
        placeholder: t("changePhone.prefix.placeholder"),
        error: t("changePhone.prefix.error"),
      },
      phone: {
        placeholder: t("changePhone.phone.placeholder"),
        error: t("changePhone.phone.error"),
      },
      actions: {
        submit: t("changePhone.actions.submit"),
      },
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const phone = data.find((d) => d.name === INPUTS.PHONE)?.value as string;
      const phonePrefix = data.find((d) => d.name === INPUTS.PHONE_PREFIX)
        ?.value as string;

      const phoneError = !phone ? i18n.phone.error : undefined;
      const prefixError = !phonePrefix ? i18n.prefix.error : undefined;

      setForm((prevState) => ({
        ...prevState,
        phoneError,
        prefixError,
      }));

      if (!phoneError && !prefixError) {
        const res = await fetchUpdateClientInfo({
          phone: `${phonePrefix}${phone}`,
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
      i18n.phone.error,
      i18n.prefix.error,
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
