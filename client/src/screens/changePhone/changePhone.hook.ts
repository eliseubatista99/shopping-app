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

type ChangePoneForm = {
  phoneError?: string;
  prefixError?: string;
};

export const useChangePhonePageHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdateClientInfo } = Api.UpdateClientInfo();
  const { goTo, goBack, history } = useNavigation();
  const { showItem } = useFeedback();
  const client = useStoreClient((state) => state.client);
  const setClientInfo = useStoreClient((state) => state.setClientInfo);

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

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.PHONE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.phone.error,
          },
        },
        {
          name: INPUTS.PHONE_PREFIX,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.prefix.error,
          },
        },
      ];
    }, [i18n.phone.error, i18n.prefix.error]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const phone = FormsHelper.getField(data, INPUTS.PHONE);
      const phonePrefix = FormsHelper.getField(data, INPUTS.PHONE_PREFIX);

      setForm((prevState) => ({
        ...prevState,
        phoneError: phone?.error,
        prefixError: phonePrefix?.error,
      }));

      if (!phone?.error && !phonePrefix?.error) {
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
