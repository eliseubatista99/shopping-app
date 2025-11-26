import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAllReviews } from "./allReviews";
import { translationsCheckout } from "./checkout";
import { translationsForYou } from "./forYou";
import { translationsHome } from "./home";
import { translationsOrders } from "./orders";
import { translationsProductDetails } from "./productDetails";
import { translationsWriteReview } from "./writeReview";

export const translationsScreens: TranslationList = {
  ...translationsHome,
  ...translationsProductDetails,
  ...translationsWriteReview,
  ...translationsAllReviews,
  ...translationsCheckout,
  ...translationsForYou,
  ...translationsOrders,
};
