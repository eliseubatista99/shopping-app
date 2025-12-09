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

  const options = [
    {
      id: "sign-in",
      text: i18n.signIn,
      onClick: () =>
        goTo({
          path: PAGES.SIGN_IN_AND_SECURITY,
        }),
    },
    {
      id: "payment",
      text: i18n.paymentMethods,
      onClick: () =>
        goTo({
          path: PAGES.PAYMENT_METHODS,
        }),
    },
    {
      id: "addresses",
      text: i18n.addresses,
      onClick: () =>
        goTo({
          path: PAGES.ADDRESSES,
        }),
    },
  ];

  return {
    i18n,
    isAuthenticated,
    options,
  };
};
