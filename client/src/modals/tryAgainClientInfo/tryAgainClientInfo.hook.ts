import { MODALS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useClientInfo } from "@hooks";
import React, { useCallback } from "react";

export const useTryAgainClientInfoModalHelper = () => {
  const { getClientInfo } = useClientInfo();
  const { hideItem } = useFeedback();
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      message: t("modals.tryAgainClientInfo.message"),
      actions: {
        button: t("modals.tryAgainClientInfo.actions.button"),
      },
    };
  }, [t]);

  const onClickButton = useCallback(() => {
    hideItem(MODALS.TRY_AGAIN_CLIENT_INFO);
    getClientInfo();
  }, [getClientInfo, hideItem]);

  return {
    i18n,
    onClickButton,
  };
};
