import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsBanners } from "./banners";
import { translationsDrawers } from "./drawers";
import { translationsGlobal } from "./global";
import { translationsHome } from "./home";
import { translationsProductDetails } from "./productDetails";
import { translationsTime } from "./time";
import { translationsToasts } from "./toasts";
import { translationsWriteReview } from "./writeReview";

export const translations: TranslationList = {
  ...translationsGlobal,
  ...translationsTime,
  ...translationsHome,
  ...translationsBanners,
  ...translationsDrawers,
  ...translationsProductDetails,
  ...translationsWriteReview,
  ...translationsToasts,
};
