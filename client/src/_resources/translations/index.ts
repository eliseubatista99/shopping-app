import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsBanners } from "./banners";
import { translationsDrawers } from "./drawers";
import { translationsGlobal } from "./global";
import { translationsHeader } from "./header";
import { translationsHome } from "./home";

export const translations: TranslationList = {
  ...translationsHeader,
  ...translationsGlobal,
  ...translationsHome,
  ...translationsBanners,
  ...translationsDrawers,
};
