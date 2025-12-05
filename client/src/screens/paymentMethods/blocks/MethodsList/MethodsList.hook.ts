import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useMethodsListBlockHelper = () => {
  const { t } = useAppTranslations();
  const paymentMethods = useStoreBase((state) => state.client?.paymentMethods);

  const i18n = React.useMemo(() => {
    return {
      title: t("paymentMethods.title"),
    };
  }, [t]);

  return {
    i18n,
    paymentMethods: paymentMethods || [],
  };
};
