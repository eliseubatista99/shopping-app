import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useBasketPageHelper = () => {
  const client = useStoreBase((state) => state.client);

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    const selectAddress = client?.addresses.find((a) => a.isSelected);

    return {
      chips: {
        address: t("home.chips.address", {
          address: selectAddress?.postalCode,
        }),
      },
    };
  }, [client?.addresses, t]);

  const initScreen = React.useCallback(async () => {}, []);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
  };
};
