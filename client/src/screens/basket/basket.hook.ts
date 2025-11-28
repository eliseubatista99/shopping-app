import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useBasketPageHelper = () => {
  const selectedAddress = useStoreBase((state) => state.selectedAddress);

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      chips: {
        address: t("home.chips.address", {
          address: selectedAddress?.postalCode,
        }),
      },
    };
  }, [selectedAddress?.postalCode, t]);

  const initScreen = React.useCallback(async () => {}, []);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
  };
};
