import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAddresses } from "./addresses";
import { translationsAllReviews } from "./allReviews";
import { translationsCart } from "./cart";
import { translationsChangeEmail } from "./changeEmail";
import { translationsChangeName } from "./changeName";
import { translationsChangePassword } from "./changePassword";
import { translationsChangePhone } from "./changePhone";
import { translationsCheckout } from "./checkout";
import { translationsForYou } from "./forYou";
import { translationsHome } from "./home";
import { translationsLogin } from "./logIn";
import { translationsOrderDetails } from "./orderDetails";
import { translationsOrders } from "./orders";
import { translationsPaymentMethods } from "./paymentMethods";
import { translationsProductDetails } from "./productDetails";
import { translationsSettings } from "./settings";
import { translationsSignIn } from "./signIn";
import { translationsSignInAndSecurity } from "./signInAndSecurity";
import { translationsWishlist } from "./wishlist";
import { translationsWriteReview } from "./writeReview";

export const translationsScreens: TranslationList = {
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
  ...translationsChangeName,
  ...translationsChangeEmail,
  ...translationsChangePhone,
  ...translationsChangePassword,
  ...translationsPaymentMethods,
  ...translationsAddresses,
};
