import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAllReviews } from "./allReviews";
import { translationsCart } from "./cart";
import { translationsCheckout } from "./checkout";
import { translationsForYou } from "./forYou";
import { translationsHome } from "./home";
import { translationsLogin } from "./logIn";
import { translationsOrderDetails } from "./orderDetails";
import { translationsOrders } from "./orders";
import { translationsProductDetails } from "./productDetails";
import { translationsSettings } from "./settings";
import { translationsSignIn } from "./signIn";
import { translationsSignInAndSecurity } from "./signInAndSecurity";
import { translationsSignUpOrLogin } from "./signUpOrLogin";
import { translationsWishlist } from "./wishlist";
import { translationsWriteReview } from "./writeReview";

export const translationsScreens: TranslationList = {
  ...translationsSignUpOrLogin,
  ...translationsSignIn,
  ...translationsLogin,
  ...translationsHome,
  ...translationsProductDetails,
  ...translationsWriteReview,
  ...translationsAllReviews,
  ...translationsCheckout,
  ...translationsForYou,
  ...translationsOrders,
  ...translationsOrderDetails,
  ...translationsWishlist,
  ...translationsCart,
  ...translationsSettings,
  ...translationsSignInAndSecurity,
};
