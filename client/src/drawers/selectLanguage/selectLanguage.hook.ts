import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, type LanguageType } from "@store";
import React, { useCallback, useState } from "react";

export const useSelectLanguageDrawerHelper = () => {
  const { hideItem } = useFeedback();
  const { t } = useAppTranslations();
  const selectedLanguage = useStoreBase((state) => state.language);
  const setBaseStoreState = useStoreBase((state) => state.setBaseStoreState);

  const [language, setLanguage] = useState<LanguageType>(selectedLanguage);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.selectLanguage.title"),
      actions: {
        submit: t("drawers.selectLanguage.button"),
      },
      language: (lang: LanguageType) => t(`global.language.${lang}`),
    };
  }, [t]);

  const options = React.useMemo(() => {
    return [
      {
        option: "en" as LanguageType,
        isSelected: language === "en",
        text: i18n.language("en"),
        onClick: () => setLanguage("en"),
      },
      {
        option: "pt" as LanguageType,
        isSelected: language === "pt",
        text: i18n.language("pt"),
        onClick: () => setLanguage("pt"),
      },
    ];
  }, [i18n, language]);

  const onClickSubmit = useCallback(() => {
    setBaseStoreState({ language });
    hideItem(DRAWERS.SELECT_LANGUAGE);
  }, [hideItem, language, setBaseStoreState]);

  const onClose = React.useCallback(() => {
    hideItem(DRAWERS.SELECT_LANGUAGE);
  }, [hideItem]);

  return {
    i18n,
    language,
    options,
    onClickSubmit,
    onClose,
  };
};
