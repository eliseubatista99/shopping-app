import { Assets } from "@assets";
import { DRAWERS, PAGES } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { LanguageHelper } from "@helpers";
import { useAppTranslations } from "@hooks";
import { useStoreAuthentication, useStoreBase } from "@store";
import React from "react";

export const useOptionsBlockHelper = () => {
  const { t } = useAppTranslations();
  const currentLanguage = useStoreBase((state) => state.language);
  const { goTo } = useNavigation();
  const { showItem } = useFeedback();

  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const i18n = React.useMemo(() => {
    return {
      title: t("settings.title"),
      signIn: t("settings.signIn"),
      paymentMethods: t("settings.paymentMethods"),
      addresses: t("settings.addresses"),
      language: t("settings.language"),
    };
  }, [t]);

  const options = [
    {
      id: "sign-in",
      text: i18n.signIn,
      icon: <Assets.Icons.NavRight width="20px" height="20px" />,
      onClick: () =>
        goTo({
          path: PAGES.SIGN_IN_AND_SECURITY,
        }),
    },
    {
      id: "payment",
      text: i18n.paymentMethods,
      icon: <Assets.Icons.NavRight width="20px" height="20px" />,
      onClick: () =>
        goTo({
          path: PAGES.PAYMENT_METHODS,
        }),
    },
    {
      id: "addresses",
      text: i18n.addresses,
      icon: <Assets.Icons.NavRight width="20px" height="20px" />,
      onClick: () =>
        goTo({
          path: PAGES.ADDRESSES,
        }),
    },
    {
      id: "language",
      text: i18n.language,
      icon: <>{LanguageHelper.getFlag(currentLanguage)}</>,
      onClick: () => showItem(DRAWERS.SELECT_LANGUAGE),
    },
  ];

  return {
    i18n,
    isAuthenticated,
    options,
  };
};
