import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsBanners } from "./banners";
import { translationsDrawers } from "./drawers";
import { translationsGlobal } from "./global";
import { translationsScreens } from "./screens";
import { translationsTime } from "./time";
import { translationsToasts } from "./toasts";

export const translations: TranslationList = {
  ...translationsGlobal,
  ...translationsTime,
  ...translationsBanners,
  ...translationsDrawers,
  ...translationsToasts,
  ...translationsScreens,
};
