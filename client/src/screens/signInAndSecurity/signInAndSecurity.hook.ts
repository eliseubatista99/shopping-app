import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useSignInAndSecurityPageHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      title: t("signInAndSecurity.title"),
      name: {
        text: t("signInAndSecurity.name.text"),
        action: t("signInAndSecurity.name.action"),
      },
      email: {
        text: t("signInAndSecurity.email.text"),
        action: t("signInAndSecurity.email.action"),
      },
      phone: {
        text: t("signInAndSecurity.phone.text"),
        action: t("signInAndSecurity.phone.action"),
      },
      password: {
        text: t("signInAndSecurity.password.text"),
        action: t("signInAndSecurity.password.action"),
      },
    };
  }, [t]);

  const options = [
    {
      id: "name",
      text: i18n.name.text,
      cta: i18n.name.action,
      onClick: () => {
        goTo({
          path: PAGES.CHANGE_NAME,
        });
      },
    },
    {
      id: "email",
      text: i18n.email.text,
      cta: i18n.email.action,
      onClick: () => {
        goTo({
          path: PAGES.CHANGE_EMAIL,
        });
      },
    },
    {
      id: "phone",
      text: i18n.phone.text,
      cta: i18n.phone.action,
      onClick: () => {
        goTo({
          path: PAGES.CHANGE_PHONE,
        });
      },
    },
    {
      id: "password",
      text: i18n.password.text,
      cta: i18n.password.action,
      onClick: () => {
        goTo({
          path: PAGES.CHANGE_PASSWORD,
        });
      },
    },
  ];

  return {
    i18n,
    options,
  };
};
