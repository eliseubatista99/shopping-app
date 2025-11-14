import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useExplorePageHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      chips: {
        address: t("home.chips.address"),
      },
    };
  }, [t]);

  const initScreen = React.useCallback(async () => {}, []);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
  };
};
