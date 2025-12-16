import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsBanners } from "./banners";
import { translationsComponents } from "./components";
import { translationsDrawers } from "./drawers";
import { translationsGlobal } from "./global";
import { translationsModals } from "./modals";
import { translationsScreens } from "./screens";
import { translationsTime } from "./time";
import { translationsToasts } from "./toasts";

export const translations: TranslationList = {
  ...translationsGlobal,
  ...translationsTime,
  ...translationsComponents,
  ...translationsBanners,
  ...translationsDrawers,
  ...translationsModals,
  ...translationsToasts,
  ...translationsScreens,
};
