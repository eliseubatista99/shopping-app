import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAllReviews } from "./allReviews";
import { translationsCheckout } from "./checkout";
import { translationsForYou } from "./forYou";
import { translationsHome } from "./home";
import { translationsOrderDetails } from "./orderDetails";
import { translationsOrders } from "./orders";
import { translationsProductDetails } from "./productDetails";
import { translationsWishlist } from "./wishlist";
import { translationsWriteReview } from "./writeReview";

export const translationsScreens: TranslationList = {
  ...translationsHome,
  ...translationsProductDetails,
  ...translationsWriteReview,
  ...translationsAllReviews,
  ...translationsCheckout,
  ...translationsForYou,
  ...translationsOrders,
  ...translationsOrderDetails,
  ...translationsWishlist,
};
