/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type SortMode =
  | "None"
  | "LowToHighScore"
  | "HightToLowScore"
  | "LowToHighPrice"
  | "HighToLowPrice"
  | "NewToOld"
  | "OldToNew";

export type PaymentMethodType = "None" | "Card" | "Bank";

export type OrderStatus =
  | "None"
  | "Processing"
  | "Sent"
  | "InDelivery"
  | "Delivered"
  | "Cancelled";

export interface AddAddressOperationInputDto {
  name: string | null;
  postalCode: string | null;
  city: string | null;
  location: string | null;
  street: string | null;
  country: string | null;
  phone: string | null;
  isDefault?: boolean | null;
}

export interface AddAddressOperationOutputDto {
  updatedAddresses?: AddressDto[] | null;
}

export interface AddAddressOperationOutputDtoOperationOutput {
  data?: AddAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddPaymentMethodOperationInputDto {
  type?: PaymentMethodType;
  name: string | null;
  cardNumber?: string | null;
  /** @format int32 */
  expirationMonth?: number | null;
  /** @format int32 */
  expirationYear?: number | null;
}

export interface AddPaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface AddPaymentMethodOperationOutputDtoOperationOutput {
  data?: AddPaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddToCartOperationInputDto {
  productIds: string[] | null;
}

export interface AddToCartOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface AddToCartOperationOutputDtoOperationOutput {
  data?: AddToCartOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddToWishlistOperationInputDto {
  productId: string | null;
}

export interface AddToWishlistOperationOutputDto {
  updatedWishlist?: ProductDto[] | null;
}

export interface AddToWishlistOperationOutputDtoOperationOutput {
  data?: AddToWishlistOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddressDto {
  id: string | null;
  name: string | null;
  postalCode: string | null;
  city: string | null;
  location: string | null;
  street: string | null;
  country: string | null;
  phone: string | null;
  countryCode?: string | null;
  isDefault?: boolean | null;
}

export interface AuthenticateOperationInputDto {
  email?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
}

export interface AuthenticateOperationOutputDto {
  token: string | null;
}

export interface AuthenticateOperationOutputDtoOperationOutput {
  data?: AuthenticateOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface CartProductDto {
  productId: string | null;
  /** @format int32 */
  quantity?: number | null;
  isSelected?: boolean | null;
}

export interface CheckoutProductDto {
  product: ProductDto;
  /** @format int32 */
  quantity: number;
}

export interface ClientInfoDto {
  id: string | null;
  name: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  phoneNumberPrefix?: string | null;
  image?: string | null;
  addresses?: AddressDto[] | null;
  paymentMethods?: PaymentMethodDto[] | null;
}

export interface CreateAccountOperationInputDto {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
}

export interface CreateAccountOperationOutputDto {
  token: string | null;
}

export interface CreateAccountOperationOutputDtoOperationOutput {
  data?: CreateAccountOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DeleteAddressOperationOutputDto {
  updatedAddresses?: AddressDto[] | null;
}

export interface DeleteAddressOperationOutputDtoOperationOutput {
  data?: DeleteAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DeletePaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface DeletePaymentMethodOperationOutputDtoOperationOutput {
  data?: DeletePaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DocumentDto {
  id: string | null;
  name: string | null;
  content?: string | null;
}

export interface ErrorDto {
  code?: string | null;
  message?: string | null;
}

export interface ExecutePurchaseOperationInputDto {
  products: CheckoutProductDto[] | null;
  addressId: string | null;
  paymentMethodId: string | null;
  wantsFastShipping?: boolean;
}

export interface ForYouOperationOutputDto {
  orders?: OrderDto[] | null;
  favoritesImages?: string[] | null;
  /** @format int32 */
  favoritesCount?: number | null;
  needingReviewProductId?: string | null;
  needingReviewProductImage?: string | null;
  review?: ReviewDto;
}

export interface ForYouOperationOutputDtoOperationOutput {
  data?: ForYouOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetCartOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface GetCartOperationOutputDtoOperationOutput {
  data?: GetCartOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetCheckoutInfoOperationInputDto {
  productIds: string[] | null;
  addressId: string | null;
  paymentMethodId: string | null;
}

export interface GetCheckoutInfoOperationOutputDto {
  /** @format double */
  shippingCost?: number | null;
  /** @format double */
  fastestDeliveryCost?: number | null;
  /** @format date-time */
  startDeliveryDate?: string | null;
  /** @format date-time */
  endDeliveryDate?: string | null;
}

export interface GetCheckoutInfoOperationOutputDtoOperationOutput {
  data?: GetCheckoutInfoOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetClientOrdersOperationOutputDto {
  orders?: OrderDto[] | null;
  /** @format date-time */
  oldestOrderDate?: string | null;
  hasMorePages?: boolean | null;
}

export interface GetClientOrdersOperationOutputDtoOperationOutput {
  data?: GetClientOrdersOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetDocumentOperationOutputDto {
  document?: DocumentDto;
}

export interface GetDocumentOperationOutputDtoOperationOutput {
  data?: GetDocumentOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetOrderDetailsOperationOutputDto {
  order?: OrderDetailDto;
}

export interface GetOrderDetailsOperationOutputDtoOperationOutput {
  data?: GetOrderDetailsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetProductReviewsOperationOutputDto {
  productName?: string | null;
  productId?: string | null;
  /** @format double */
  averageScore?: number | null;
  /** @format int32 */
  reviewsCount?: number | null;
  scores?: ScoreCountDto[] | null;
  reviews?: ReviewDto[] | null;
  hasMorePages?: boolean | null;
}

export interface GetProductReviewsOperationOutputDtoOperationOutput {
  data?: GetProductReviewsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetWishlistOperationOutputDto {
  products?: ProductDto[] | null;
  hasMorePages?: boolean | null;
}

export interface GetWishlistOperationOutputDtoOperationOutput {
  data?: GetWishlistOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface OrderDetailDto {
  statusHistory: OrderStatusEntryDto[] | null;
  paymentMethodDto: PaymentMethodDto;
  addressDto: AddressDto;
  /** @format double */
  productCost: number;
  /** @format double */
  totalCost: number;
  /** @format double */
  shippingCost?: number | null;
  /** @format double */
  discounts?: number | null;
}

export interface OrderDto {
  id: string | null;
  products: ProductDetailDto[] | null;
  /** @format date-time */
  date: string;
  currentStatus: OrderStatusEntryDto;
}

export interface OrderStatusEntryDto {
  status: OrderStatus;
  /** @format date-time */
  date: string;
}

export interface OutputMetadataDto {
  success?: boolean | null;
  errors?: ErrorDto[] | null;
}

export interface PaymentMethodDto {
  id: string | null;
  type: PaymentMethodType;
  name: string | null;
  network: string | null;
  image?: string | null;
  cardNumberMasked?: string | null;
  isDefault?: boolean | null;
}

export interface ProductDetailDto {
  id: string | null;
  name: string | null;
  image: string | null;
  /** @format double */
  price: number;
  /** @format double */
  originalPrice: number;
  /** @format double */
  score: number;
  /** @format int32 */
  scoreCount: number;
  /** @format double */
  shippingCost: number;
  bestSeller: boolean;
  isWishlisted?: boolean | null;
  specifications?: ProductSpecificationDto;
  seller: SellerDto;
  documents?: DocumentDto[] | null;
  detailImages?: string[] | null;
  productOptions?: ProductOptionDto[] | null;
  relatedProducts?: ProductDto[] | null;
  comboProducts?: ProductDto[] | null;
  reviews?: ReviewDto[] | null;
  /** @format date-time */
  estimatedDeliveryDate?: string | null;
}

export interface ProductDetailOperationOutputDto {
  product?: ProductDetailDto;
}

export interface ProductDetailOperationOutputDtoOperationOutput {
  data?: ProductDetailOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface ProductDto {
  id: string | null;
  name: string | null;
  image: string | null;
  /** @format double */
  price: number;
  /** @format double */
  originalPrice: number;
  /** @format double */
  score: number;
  /** @format int32 */
  scoreCount: number;
  /** @format double */
  shippingCost: number;
  bestSeller: boolean;
  isWishlisted?: boolean | null;
}

export interface ProductOfferGroupDto {
  products: ProductDto[] | null;
  category: string | null;
}

export interface ProductOffersOperationOutputDto {
  fromSearchHistory?: ProductDto[] | null;
  buyAgain?: ProductDto[] | null;
  groups?: ProductOfferGroupDto[] | null;
  banners?: ProductOfferGroupDto[] | null;
}

export interface ProductOffersOperationOutputDtoOperationOutput {
  data?: ProductOffersOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface ProductOptionDto {
  id: string | null;
  name: string | null;
  image?: string | null;
  /** @format double */
  price: number;
  /** @format double */
  originalPrice: number;
}

export interface ProductSpecificationDto {
  brand?: string | null;
  model?: string | null;
  origin?: string | null;
  manufacturer?: string | null;
  /** @format double */
  height?: number | null;
  /** @format double */
  width?: number | null;
  /** @format double */
  depth?: number | null;
  /** @format int32 */
  warranty?: number | null;
}

export interface RefreshAuthenticationOperationOutputDto {
  token: string | null;
}

export interface RefreshAuthenticationOperationOutputDtoOperationOutput {
  data?: RefreshAuthenticationOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface RemoveFromCartOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface RemoveFromCartOperationOutputDtoOperationOutput {
  data?: RemoveFromCartOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface RemoveFromWishlistOperationInputDto {
  productId: string | null;
}

export interface RemoveFromWishlistOperationOutputDto {
  updatedWishlist?: ProductDto[] | null;
}

export interface RemoveFromWishlistOperationOutputDtoOperationOutput {
  data?: RemoveFromWishlistOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface ReviewDto {
  id: string | null;
  reviewerId: string | null;
  reviewerName: string | null;
  reviewerIcon?: string | null;
  /** @format double */
  score: number;
  title: string | null;
  comment: string | null;
  productId: string | null;
  productName: string | null;
  productIcon?: string | null;
}

export interface ScoreCountDto {
  /** @format double */
  score: number;
  /** @format int32 */
  count: number;
}

export interface SearchProductsOperationOutputDto {
  products?: ProductDto[] | null;
  hasMorePages?: boolean | null;
}

export interface SearchProductsOperationOutputDtoOperationOutput {
  data?: SearchProductsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface SellerDto {
  id: string | null;
  name: string | null;
  image?: string | null;
}

export interface SetDefaultAddressOperationInputDto {
  addressId: string | null;
}

export interface SetDefaultAddressOperationOutputDto {
  updatedAddresses?: AddressDto[] | null;
}

export interface SetDefaultAddressOperationOutputDtoOperationOutput {
  data?: SetDefaultAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface SetDefaultPaymentMethodOperationInputDto {
  methodId: string | null;
}

export interface SetDefaultPaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface SetDefaultPaymentMethodOperationOutputDtoOperationOutput {
  data?: SetDefaultPaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface TableTestsEntry {
  nome?: string | null;
  /** @format int32 */
  idade?: number;
  localidade?: string | null;
}

export interface UpdateAddressOperationInputDto {
  id: string | null;
  name?: string | null;
  postalCode?: string | null;
  city?: string | null;
  location?: string | null;
  street?: string | null;
  country?: string | null;
  phone?: string | null;
  isDefault?: boolean | null;
}

export interface UpdateAddressOperationOutputDto {
  updatedAddresses?: AddressDto[] | null;
}

export interface UpdateAddressOperationOutputDtoOperationOutput {
  data?: UpdateAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface UpdateCartProductOperationInputDto {
  products: CartProductDto[] | null;
}

export interface UpdateCartProductOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface UpdateCartProductOperationOutputDtoOperationOutput {
  data?: UpdateCartProductOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface UpdateClientInfoOperationInputDto {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  password?: string | null;
}

export interface UpdateClientInfoOperationOutputDto {
  updatedInfo?: ClientInfoDto;
}

export interface UpdateClientInfoOperationOutputDtoOperationOutput {
  data?: UpdateClientInfoOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface UpdatePaymentMethodOperationInputDto {
  id: string | null;
  name?: string | null;
  cardNumber?: string | null;
  /** @format int32 */
  expirationMonth?: number | null;
  /** @format int32 */
  expirationYear?: number | null;
}

export interface UpdatePaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface UpdatePaymentMethodOperationOutputDtoOperationOutput {
  data?: UpdatePaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export type VoidDto = object;

export interface VoidDtoOperationOutput {
  data?: VoidDto;
  metadata?: OutputMetadataDto;
}

export interface WriteReviewOperationInputDto {
  reviewerId: string | null;
  productId: string | null;
  /** @format double */
  score: number;
  title: string | null;
  description?: string | null;
}

export namespace Api {
  /**
   * No description
   * @tags Address
   * @name AddAddressCreate
   * @request POST:/api/AddAddress
   * @response `200` `AddAddressOperationOutputDtoOperationOutput` OK
   */
  export namespace AddAddressCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddAddressOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddAddressOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Address
   * @name DeleteAddressDelete
   * @request DELETE:/api/DeleteAddress
   * @response `200` `DeleteAddressOperationOutputDtoOperationOutput` OK
   */
  export namespace DeleteAddressDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      AddressId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteAddressOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Address
   * @name SetDefaultAddressPartialUpdate
   * @request PATCH:/api/SetDefaultAddress
   * @response `200` `SetDefaultAddressOperationOutputDtoOperationOutput` OK
   */
  export namespace SetDefaultAddressPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetDefaultAddressOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      SetDefaultAddressOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Address
   * @name UpdateAddressPartialUpdate
   * @request PATCH:/api/UpdateAddress
   * @response `200` `UpdateAddressOperationOutputDtoOperationOutput` OK
   */
  export namespace UpdateAddressPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateAddressOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateAddressOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Authentication
   * @name AuthenticateCreate
   * @request POST:/api/Authenticate
   * @response `200` `AuthenticateOperationOutputDtoOperationOutput` OK
   */
  export namespace AuthenticateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthenticateOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AuthenticateOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Authentication
   * @name RefreshAuthenticationCreate
   * @request POST:/api/RefreshAuthentication
   * @response `200` `RefreshAuthenticationOperationOutputDtoOperationOutput` OK
   */
  export namespace RefreshAuthenticationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      RefreshAuthenticationOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Authentication
   * @name CreateAccountCreate
   * @request POST:/api/CreateAccount
   * @response `200` `CreateAccountOperationOutputDtoOperationOutput` OK
   */
  export namespace CreateAccountCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateAccountOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Authentication
   * @name LogoutCreate
   * @request POST:/api/Logout
   * @response `200` `VoidDtoOperationOutput` OK
   */
  export namespace LogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VoidDtoOperationOutput;
  }

  /**
   * No description
   * @tags Cart
   * @name AddToCartCreate
   * @request POST:/api/AddToCart
   * @response `200` `AddToCartOperationOutputDtoOperationOutput` OK
   */
  export namespace AddToCartCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddToCartOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddToCartOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Cart
   * @name GetCartList
   * @request GET:/api/GetCart
   * @response `200` `GetCartOperationOutputDtoOperationOutput` OK
   */
  export namespace GetCartList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCartOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Cart
   * @name RemoveFromCartDelete
   * @request DELETE:/api/RemoveFromCart
   * @response `200` `RemoveFromCartOperationOutputDtoOperationOutput` OK
   */
  export namespace RemoveFromCartDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductIds: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveFromCartOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Cart
   * @name UpdateCartProductPartialUpdate
   * @request PATCH:/api/UpdateCartProduct
   * @response `200` `UpdateCartProductOperationOutputDtoOperationOutput` OK
   */
  export namespace UpdateCartProductPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateCartProductOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      UpdateCartProductOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Common
   * @name ForYouCreate
   * @request POST:/api/ForYou
   * @response `200` `ForYouOperationOutputDtoOperationOutput` OK
   */
  export namespace ForYouCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ForYouOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Common
   * @name GetDocumentList
   * @request GET:/api/GetDocument
   * @response `200` `GetDocumentOperationOutputDtoOperationOutput` OK
   */
  export namespace GetDocumentList {
    export type RequestParams = {};
    export type RequestQuery = {
      Id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetDocumentOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Common
   * @name UpdateClientInfoPartialUpdate
   * @request PATCH:/api/UpdateClientInfo
   * @response `200` `UpdateClientInfoOperationOutputDtoOperationOutput` OK
   */
  export namespace UpdateClientInfoPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateClientInfoOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      UpdateClientInfoOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Orders
   * @name GetClientOrdersList
   * @request GET:/api/GetClientOrders
   * @response `200` `GetClientOrdersOperationOutputDtoOperationOutput` OK
   */
  export namespace GetClientOrdersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetClientOrdersOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Orders
   * @name GetOrderDetailsList
   * @request GET:/api/GetOrderDetails
   * @response `200` `GetOrderDetailsOperationOutputDtoOperationOutput` OK
   */
  export namespace GetOrderDetailsList {
    export type RequestParams = {};
    export type RequestQuery = {
      OrderId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOrderDetailsOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name AddPaymentMethodCreate
   * @request POST:/api/AddPaymentMethod
   * @response `200` `AddPaymentMethodOperationOutputDtoOperationOutput` OK
   */
  export namespace AddPaymentMethodCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddPaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      AddPaymentMethodOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name DeletePaymentMethodDelete
   * @request DELETE:/api/DeletePaymentMethod
   * @response `200` `DeletePaymentMethodOperationOutputDtoOperationOutput` OK
   */
  export namespace DeletePaymentMethodDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      MethodId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      DeletePaymentMethodOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name SetDefaultPaymentMethodPartialUpdate
   * @request PATCH:/api/SetDefaultPaymentMethod
   * @response `200` `SetDefaultPaymentMethodOperationOutputDtoOperationOutput` OK
   */
  export namespace SetDefaultPaymentMethodPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetDefaultPaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      SetDefaultPaymentMethodOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name UpdatePaymentMethodPartialUpdate
   * @request PATCH:/api/UpdatePaymentMethod
   * @response `200` `UpdatePaymentMethodOperationOutputDtoOperationOutput` OK
   */
  export namespace UpdatePaymentMethodPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdatePaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      UpdatePaymentMethodOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Product
   * @name GetProductReviewsList
   * @request GET:/api/GetProductReviews
   * @response `200` `GetProductReviewsOperationOutputDtoOperationOutput` OK
   */
  export namespace GetProductReviewsList {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductId?: string;
      ReviewId?: string;
      AuthorId?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
      /** @format double */
      FilterByRating?: number;
      SortMode?: SortMode;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      GetProductReviewsOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Product
   * @name ProductDetailList
   * @request GET:/api/ProductDetail
   * @response `200` `ProductDetailOperationOutputDtoOperationOutput` OK
   */
  export namespace ProductDetailList {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductDetailOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Product
   * @name ProductOffersList
   * @request GET:/api/ProductOffers
   * @response `200` `ProductOffersOperationOutputDtoOperationOutput` OK
   */
  export namespace ProductOffersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductOffersOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Product
   * @name SearchProductsList
   * @request GET:/api/SearchProducts
   * @response `200` `SearchProductsOperationOutputDtoOperationOutput` OK
   */
  export namespace SearchProductsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
      Text?: string;
      /** @format double */
      Score?: number;
      /** @format double */
      MaxPrice?: number;
      /** @format double */
      MinPrice?: number;
      BestSeller?: boolean;
      FreeShipping?: boolean;
      Category?: string;
      Sort?: SortMode;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SearchProductsOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Product
   * @name WriteReviewCreate
   * @request POST:/api/WriteReview
   * @response `200` `VoidDtoOperationOutput` OK
   */
  export namespace WriteReviewCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WriteReviewOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = VoidDtoOperationOutput;
  }

  /**
   * No description
   * @tags Purchase
   * @name ExecutePurchaseCreate
   * @request POST:/api/ExecutePurchase
   * @response `200` `VoidDtoOperationOutput` OK
   */
  export namespace ExecutePurchaseCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ExecutePurchaseOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = VoidDtoOperationOutput;
  }

  /**
   * No description
   * @tags Purchase
   * @name GetCheckoutInfoList
   * @request GET:/api/GetCheckoutInfo
   * @response `200` `GetCheckoutInfoOperationOutputDtoOperationOutput` OK
   */
  export namespace GetCheckoutInfoList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetCheckoutInfoOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = GetCheckoutInfoOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Wishlist
   * @name AddToWishlistCreate
   * @request POST:/api/AddToWishlist
   * @response `200` `AddToWishlistOperationOutputDtoOperationOutput` OK
   */
  export namespace AddToWishlistCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddToWishlistOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddToWishlistOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Wishlist
   * @name GetWishlistList
   * @request GET:/api/GetWishlist
   * @response `200` `GetWishlistOperationOutputDtoOperationOutput` OK
   */
  export namespace GetWishlistList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetWishlistOperationOutputDtoOperationOutput;
  }

  /**
   * No description
   * @tags Wishlist
   * @name RemoveFromWishlistDelete
   * @request DELETE:/api/RemoveFromWishlist
   * @response `200` `RemoveFromWishlistOperationOutputDtoOperationOutput` OK
   */
  export namespace RemoveFromWishlistDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RemoveFromWishlistOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody =
      RemoveFromWishlistOperationOutputDtoOperationOutput;
  }
}

export namespace Authentication {
  /**
   * No description
   * @tags Authentication
   * @name GetWeatherForecast
   * @request GET:/Authentication
   * @response `200` `(TableTestsEntry)[]` OK
   */
  export namespace GetWeatherForecast {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TableTestsEntry[];
  }
}
