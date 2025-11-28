import { AddToCard } from "./useFetchAddToCard";
import { GetCart } from "./useFetchBasket";
import { GetClientInfo } from "./useFetchClientInfo";
import { GetDocument } from "./useFetchDocument";
import { ExecutePurchase } from "./useFetchExecutePurchase";
import { GetForYou } from "./useFetchForYou";
import { GetCheckoutInfo } from "./useFetchGetCheckoutInfo";
import { GetClientOrders } from "./useFetchGetClientOrders";
import { GetOrderDetails } from "./useFetchGetOrderDetails";
import { GetWishlist } from "./useFetchGetWishlist";
import { GetProductDetails } from "./useFetchProductDetail";
import { GetProductOffers } from "./useFetchProductOffers";
import { GetProductReviews } from "./useFetchProductReviews";
import { RemoveFromWishlist } from "./useFetchRemoveFromWishlist";
import { SearchProducts } from "./useFetchSearchProducts";
import { UpdateDefaultAddress } from "./useFetchUpdateDefaultAddress";
import { WriteReview } from "./useFetchWriteReview";

export const Api = {
  useFetchAddToCart: AddToCard,
  useFetchCart: GetCart,
  useFetchClientInfo: GetClientInfo,
  useFetchGetDocument: GetDocument,
  useFetchExecutePurchase: ExecutePurchase,
  useFetchForYou: GetForYou,
  useFetchGetCheckoutInfo: GetCheckoutInfo,
  useFetchGetClientOrders: GetClientOrders,
  useFetchGetOrderDetails: GetOrderDetails,
  useFetchGetWishlist: GetWishlist,
  useFetchProductDetail: GetProductDetails,
  useFetchProductOffers: GetProductOffers,
  useFetchGetProductReviews: GetProductReviews,
  useFetchRemoveFromWishlist: RemoveFromWishlist,
  useFetchSearchProducts: SearchProducts,
  useFetchUpdateDefaultAddress: UpdateDefaultAddress,
  useFetchWriteReview: WriteReview,
};
