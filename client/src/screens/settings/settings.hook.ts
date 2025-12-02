import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useSettingsPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      title: t("settings.title"),
      signIn: t("settings.signIn"),
      paymentMethods: t("settings.paymentMethods"),
      addresses: t("settings.addresses"),
    };
  }, [t]);

  const initScreen = React.useCallback(async () => {}, []);

  const onClickSignInAndSecurity = React.useCallback(() => {
    goTo({
      path: PAGES.SIGN_IN_AND_SECURITY,
    });
  }, [goTo]);

  const onClickPaymentMethods = React.useCallback(() => {}, []);

  const onClickAddresses = React.useCallback(() => {}, []);

  const options = [
    {
      id: "sign-in",
      text: i18n.signIn,
      onClick: onClickSignInAndSecurity,
    },
    {
      id: "payment",
      text: i18n.paymentMethods,
      onClick: onClickPaymentMethods,
    },
    {
      id: "addresses",
      text: i18n.addresses,
      onClick: onClickAddresses,
    },
  ];

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
    options,
  };
};
