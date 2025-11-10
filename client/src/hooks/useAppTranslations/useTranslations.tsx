import { useTranslations } from "@eliseubatista99/react-scaffold-core";
import { AppResources } from "@resources";
import { useBaseStore } from "@store";

export const useAppTranslations = () => {
  const translations = AppResources.Translations;
  const language = useBaseStore((state) => state.language);

  const { t, getTranslation } = useTranslations({
    language,
    translations,
  });

  return {
    t,
    getTranslation,
  };
};
