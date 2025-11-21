import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAllReviews } from "./allReviews";
import { translationsHome } from "./home";
import { translationsProductDetails } from "./productDetails";
import { translationsWriteReview } from "./writeReview";

export const translationsScreens: TranslationList = {
  ...translationsHome,
  ...translationsProductDetails,
  ...translationsWriteReview,
  ...translationsAllReviews,
};
