import { useTranslations } from "@eliseubatista99/react-scaffold-core";
import { AppResources } from "@resources";
import { useStoreBase } from "@store";

export const useAppTranslations = () => {
  const translations = AppResources.Translations;
  const language = useStoreBase((state) => state.language);

  const { t, getTranslation } = useTranslations({
    language: language,
    translations,
  });

  return {
    t,
    getTranslation,
  };
};
