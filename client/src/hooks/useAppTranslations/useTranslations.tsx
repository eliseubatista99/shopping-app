import { useTranslations } from "@eliseubatista99/react-scaffold-core";
import { AppResources } from "@resources";
import { useStoreBase } from "@store";

export const useAppTranslations = () => {
  const translations = AppResources.Translations;
  const { storeBase } = useStoreBase();

  const { t, getTranslation } = useTranslations({
    language: storeBase.language,
    translations,
  });

  return {
    t,
    getTranslation,
  };
};
