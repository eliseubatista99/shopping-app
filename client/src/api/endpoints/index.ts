import { ApiAddressMethods } from "./addresses";
import { ApiCart } from "./cart";
import { ApiPaymentMethods } from "./paymentMethods";
import { AddToWishlist } from "./useFetchAddToWishlist";
import { Authenticate } from "./useFetchAuthenticate";
import { GetClientInfo } from "./useFetchClientInfo";
import { CreateAccount } from "./useFetchCreateAccount";
import { GetDocument } from "./useFetchDocument";
import { ExecutePurchase } from "./useFetchExecutePurchase";
import { GetForYou } from "./useFetchForYou";
import { GetCheckoutInfo } from "./useFetchGetCheckoutInfo";
import { GetClientOrders } from "./useFetchGetClientOrders";
import { GetOrderDetails } from "./useFetchGetOrderDetails";
import { GetWishlist } from "./useFetchGetWishlist";
import { IsExistingAccount } from "./useFetchIsExistingAccount";
import { GetProductDetails } from "./useFetchProductDetail";
import { GetProductOffers } from "./useFetchProductOffers";
import { GetProductReviews } from "./useFetchProductReviews";
import { RefreshAuthentication } from "./useFetchRefreshAuthentication";
import { RemoveFromWishlist } from "./useFetchRemoveFromWishlist";
import { SearchProducts } from "./useFetchSearchProducts";
import { UpdateClientInfo } from "./useFetchUpdateClientInfo";
import { WriteReview } from "./useFetchWriteReview";

export const Api = {
  GetClientInfo,
  GetDocument,
  ExecutePurchase,
  GetForYou,
  GetCheckoutInfo,
  GetClientOrders,
  GetOrderDetails,
  GetWishlist,
  GetProductDetails,
  GetProductOffers,
  GetProductReviews,
  RemoveFromWishlist,
  SearchProducts,
  WriteReview,
  Authenticate,
  CreateAccount,
  RefreshAuthentication,
  IsExistingAccount,
  UpdateClientInfo,
  AddToWishlist,
  ...ApiCart,
  ...ApiPaymentMethods,
  ...ApiAddressMethods,
};
