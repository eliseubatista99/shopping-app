import { MODALS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React, { useCallback } from "react";

export const useGenericApiErrorModalHelper = () => {
  const { hideItem } = useFeedback();
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      message: t("modals.genericApiError.message"),
      actions: {
        button: t("modals.genericApiError.actions.button"),
      },
    };
  }, [t]);

  const onClickButton = useCallback(() => {
    hideItem(MODALS.GENERIC_API_ERROR);
  }, [hideItem]);

  return {
    i18n,
    onClickButton,
  };
};
