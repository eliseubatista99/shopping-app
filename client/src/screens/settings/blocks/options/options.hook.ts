import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAuthentication } from "@store";
import React from "react";

export const useOptionsBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const i18n = React.useMemo(() => {
    return {
      title: t("settings.title"),
      signIn: t("settings.signIn"),
      paymentMethods: t("settings.paymentMethods"),
      addresses: t("settings.addresses"),
    };
  }, [t]);

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

  return {
    i18n,
    isAuthenticated,
    options,
  };
};
