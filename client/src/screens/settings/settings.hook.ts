import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useSettingsPageHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("settings.title"),
      signIn: t("settings.signIn"),
      paymentMethods: t("settings.paymentMethods"),
      addresses: t("settings.addresses"),
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
