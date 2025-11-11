import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useBasketPageHelper = () => {
  const { storeBase } = useStoreBase();

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      chips: {
        address: t("home.chips.address", {
          address: storeBase.client?.address.postalCode,
        }),
      },
    };
  }, [storeBase.client?.address.postalCode, t]);

  const initScreen = React.useCallback(async () => {}, []);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
  };
};
