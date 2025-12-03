import { AddToCard } from "./useFetchAddToCard";
import { Authenticate } from "./useFetchAuthenticate";
import { GetCart } from "./useFetchBasket";
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
import { RemoveFromCart } from "./useFetchRemoveFromCart";
import { RemoveFromWishlist } from "./useFetchRemoveFromWishlist";
import { SearchProducts } from "./useFetchSearchProducts";
import { UpdateCartProduct } from "./useFetchUpdateCartProduct";
import { UpdateClientInfo } from "./useFetchUpdateClientInfo";
import { UpdateDefaultAddress } from "./useFetchUpdateDefaultAddress";
import { WriteReview } from "./useFetchWriteReview";

export const Api = {
  AddToCard,
  GetCart,
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
  UpdateDefaultAddress,
  WriteReview,
  RemoveFromCart,
  UpdateCartProduct,
  Authenticate,
  CreateAccount,
  RefreshAuthentication,
  IsExistingAccount,
  UpdateClientInfo,
};
