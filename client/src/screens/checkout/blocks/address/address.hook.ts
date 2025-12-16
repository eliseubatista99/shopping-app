import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAddresses } from "@store";
import React from "react";

export const useAddressBlockHelper = () => {
  const { t } = useAppTranslations();
  const selectedAddress = useStoreAddresses((state) => state.selectedAddress);
  const { showItem } = useFeedback();

  const i18n = React.useMemo(() => {
    return {
      addressName: t("checkout.address.name", {
        name: selectedAddress?.name,
      }),
      change: t("checkout.address.change"),
    };
  }, [selectedAddress?.name, t]);

  const onClickChangeAddress = React.useCallback(() => {
    showItem(DRAWERS.SELECT_ADDRESS);
  }, [showItem]);

  return {
    i18n,
    selectedAddress,
    onClickChangeAddress,
  };
};
