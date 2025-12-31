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

export interface AddAddressResponseDto {
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

export interface AddPaymentMethodResponseDto {
  data?: AddPaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddToCartOperationInputDto {
  productIds: string[] | null;
}

export interface AddToCartOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface AddToCartResponseDto {
  data?: AddToCartOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface AddToWishlistOperationInputDto {
  productId: string | null;
}

export interface AddToWishlistOperationOutputDto {
  updatedWishlist?: ProductDto[] | null;
}

export interface AddToWishlistResponseDto {
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

export interface AuthenticateResponseDto {
  data?: AuthenticateOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface CartProductDetailsDto {
  productId: string | null;
  /** @format int32 */
  quantity?: number | null;
  isSelected?: boolean | null;
  product?: ProductDto;
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

export interface CreateAccountResponseDto {
  data?: CreateAccountOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DeleteAddressOperationInputDto {
  addressId: string | null;
}

export interface DeleteAddressOperationOutputDto {
  updatedAddresses?: AddressDto[] | null;
}

export interface DeleteAddressResponseDto {
  data?: DeleteAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DeletePaymentMethodOperationInputDto {
  methodId: string | null;
}

export interface DeletePaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface DeletePaymentMethodResponseDto {
  data?: DeletePaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface DocumentDto {
  id: string | null;
  name: string | null;
  content?: string | null;
}

export type Dto = object;

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

export interface ExecutePurchaseResponseDto {
  data?: OperationOutputDto;
  metadata?: OutputMetadataDto;
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

export interface ForYouResponseDto {
  data?: ForYouOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetCartOperationOutputDto {
  products?: CartProductDetailsDto[] | null;
}

export interface GetCartResponseDto {
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

export interface GetCheckoutInfoResponseDto {
  data?: GetCheckoutInfoOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetClientInfoOperationOutputDto {
  client?: ClientInfoDto;
  /** @format int32 */
  itemsInCart?: number | null;
}

export interface GetClientInfoResponseDto {
  data?: GetClientInfoOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetClientOrdersOperationInputDto {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  orderId?: string | null;
  filterByText?: string | null;
  filterByStatus?: OrderStatus;
  sortMode?: SortMode;
  /** @format date-time */
  filterByStartDate?: string | null;
  /** @format date-time */
  filterByEndDate?: string | null;
}

export interface GetClientOrdersOperationOutputDto {
  hasMorePages?: boolean | null;
  orders?: OrderDto[] | null;
  /** @format date-time */
  oldestOrderDate?: string | null;
}

export interface GetClientOrdersResponseDto {
  data?: GetClientOrdersOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetDocumentOperationInputDto {
  id: string | null;
}

export interface GetDocumentOperationOutputDto {
  document?: DocumentDto;
}

export interface GetDocumentResponseDto {
  data?: GetDocumentOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetOrderDetailsOperationInputDto {
  orderId: string | null;
}

export interface GetOrderDetailsOperationOutputDto {
  order?: OrderDetailDto;
}

export interface GetOrderDetailsResponseDto {
  data?: GetOrderDetailsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetPaymentMethodDetailsOperationInputDto {
  methodId: string | null;
}

export interface GetPaymentMethodDetailsOperationOutputDto {
  method?: PaymentMethodDetailsDto;
}

export interface GetPaymentMethodDetailsResponseDto {
  data?: GetPaymentMethodDetailsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetProductReviewsOperationInputDto {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  productId?: string | null;
  reviewId?: string | null;
  authorId?: string | null;
  /** @format double */
  filterByRating?: number | null;
  sortMode?: SortMode;
}

export interface GetProductReviewsOperationOutputDto {
  hasMorePages?: boolean | null;
  productName?: string | null;
  productId?: string | null;
  /** @format double */
  averageScore?: number | null;
  /** @format int32 */
  reviewsCount?: number | null;
  scores?: ScoreCountDto[] | null;
  reviews?: ReviewDto[] | null;
}

export interface GetProductReviewsResponseDto {
  data?: GetProductReviewsOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface GetWishlistOperationInputDto {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
}

export interface GetWishlistOperationOutputDto {
  hasMorePages?: boolean | null;
  products?: ProductDto[] | null;
}

export interface GetWishlistResponseDto {
  data?: GetWishlistOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface IsExistingAccountOperationInputDto {
  email?: string | null;
  phoneNumber?: string | null;
}

export interface IsExistingAccountOperationOutputDto {
  exists?: boolean | null;
}

export interface IsExistingAccountResponseDto {
  data?: IsExistingAccountOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface LogoutOperationResponseDto {
  data?: OperationOutputDto;
  metadata?: OutputMetadataDto;
}

export type OperationInputDto = object;

export type OperationOutputDto = object;

export interface OperationPaginatedInputDto {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
}

export interface OperationPaginatedOutputDto {
  hasMorePages?: boolean | null;
}

export interface OrderDetailDto {
  id: string | null;
  products: ProductDetailDto[] | null;
  /** @format date-time */
  date: string;
  currentStatus: OrderStatusEntryDto;
  statusHistory: OrderStatusEntryDto[] | null;
  paymentMethod: PaymentMethodDto;
  address: AddressDto;
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

export interface PaymentMethodDetailsDto {
  id: string | null;
  type: PaymentMethodType;
  name: string | null;
  network: string | null;
  image?: string | null;
  cardNumberMasked?: string | null;
  isDefault?: boolean | null;
  securityCode?: string | null;
  cardNumberUnmasked?: string | null;
  /** @format int32 */
  expirationMonth?: number | null;
  /** @format int32 */
  expirationYear?: number | null;
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

export interface ProductDetailOperationInputDto {
  productId: string | null;
}

export interface ProductDetailOperationOutputDto {
  product?: ProductDetailDto;
}

export interface ProductDetailResponseDto {
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

export interface ProductOffersdResponseDto {
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

export interface RefreshAuthenticationResponseDto {
  data?: RefreshAuthenticationOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface RemoveFromCartOperationInputDto {
  productIds: string[] | null;
}

export interface RemoveFromCartOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface RemoveFromCartResponseDto {
  data?: RemoveFromCartOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface RemoveFromWishlistOperationInputDto {
  productId: string | null;
}

export interface RemoveFromWishlistOperationOutputDto {
  updatedWishlist?: ProductDto[] | null;
}

export interface RemoveFromWishlistResponseDto {
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

export interface SearchProductsOperationInputDto {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  text?: string | null;
  /** @format double */
  score?: number | null;
  /** @format double */
  maxPrice?: number | null;
  /** @format double */
  minPrice?: number | null;
  bestSeller?: boolean | null;
  freeShipping?: boolean | null;
  category?: string | null;
  sort?: SortMode;
}

export interface SearchProductsOperationOutputDto {
  hasMorePages?: boolean | null;
  products?: ProductDto[] | null;
}

export interface SearchProductsResponseDto {
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

export interface SetDefaultAddressResponseDto {
  data?: SetDefaultAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface SetDefaultPaymentMethodOperationInputDto {
  methodId: string | null;
}

export interface SetDefaultPaymentMethodOperationOutputDto {
  updatedMethods?: PaymentMethodDto[] | null;
}

export interface SetDefaultPaymentMethodResponseDto {
  data?: SetDefaultPaymentMethodOperationOutputDto;
  metadata?: OutputMetadataDto;
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

export interface UpdateAddressResponseDto {
  data?: UpdateAddressOperationOutputDto;
  metadata?: OutputMetadataDto;
}

export interface UpdateCartProductOperationInputDto {
  products: CartProductDto[] | null;
}

export interface UpdateCartProductOperationOutputDto {
  products?: CartProductDto[] | null;
}

export interface UpdateCartResponseDto {
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

export interface UpdateClientInfoResponseDto {
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

export interface UpdatePaymentMethodResponseDto {
  data?: UpdatePaymentMethodOperationOutputDto;
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

export interface WriteReviewResponseDto {
  data?: OperationOutputDto;
  metadata?: OutputMetadataDto;
}

export namespace Api {
  /**
   * No description
   * @tags Address
   * @name AddAddress
   * @request POST:/api/AddAddress
   * @response `200` `AddAddressResponseDto` OK
   */
  export namespace AddAddress {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddAddressOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddAddressResponseDto;
  }

  /**
   * No description
   * @tags Address
   * @name DeleteAddress
   * @request DELETE:/api/DeleteAddress
   * @response `200` `DeleteAddressResponseDto` OK
   */
  export namespace DeleteAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      AddressId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteAddressResponseDto;
  }

  /**
   * No description
   * @tags Address
   * @name SetDefaultAddress
   * @request PATCH:/api/SetDefaultAddress
   * @response `200` `SetDefaultAddressResponseDto` OK
   */
  export namespace SetDefaultAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      AddressId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SetDefaultAddressResponseDto;
  }

  /**
   * No description
   * @tags Address
   * @name UpdateAddress
   * @request PATCH:/api/UpdateAddress
   * @response `200` `UpdateAddressResponseDto` OK
   */
  export namespace UpdateAddress {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateAddressOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateAddressResponseDto;
  }

  /**
   * No description
   * @tags Authentication
   * @name IsExistingAccountList
   * @request GET:/api/IsExistingAccount
   * @response `200` `IsExistingAccountResponseDto` OK
   */
  export namespace IsExistingAccountList {
    export type RequestParams = {};
    export type RequestQuery = {
      Email?: string;
      PhoneNumber?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = IsExistingAccountResponseDto;
  }

  /**
   * No description
   * @tags Authentication
   * @name AuthenticateCreate
   * @request POST:/api/Authenticate
   * @response `200` `AuthenticateResponseDto` OK
   */
  export namespace AuthenticateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthenticateOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AuthenticateResponseDto;
  }

  /**
   * No description
   * @tags Authentication
   * @name RefreshAuthenticationCreate
   * @request POST:/api/RefreshAuthentication
   * @response `200` `RefreshAuthenticationResponseDto` OK
   */
  export namespace RefreshAuthenticationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RefreshAuthenticationResponseDto;
  }

  /**
   * No description
   * @tags Authentication
   * @name CreateAccountCreate
   * @request POST:/api/CreateAccount
   * @response `200` `CreateAccountResponseDto` OK
   */
  export namespace CreateAccountCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateAccountResponseDto;
  }

  /**
   * No description
   * @tags Authentication
   * @name LogoutCreate
   * @request POST:/api/Logout
   * @response `200` `LogoutOperationResponseDto` OK
   */
  export namespace LogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LogoutOperationResponseDto;
  }

  /**
   * No description
   * @tags Cart
   * @name AddToCartCreate
   * @request POST:/api/AddToCart
   * @response `200` `AddToCartResponseDto` OK
   */
  export namespace AddToCartCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddToCartOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddToCartResponseDto;
  }

  /**
   * No description
   * @tags Cart
   * @name GetCartList
   * @request GET:/api/GetCart
   * @response `200` `GetCartResponseDto` OK
   */
  export namespace GetCartList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCartResponseDto;
  }

  /**
   * No description
   * @tags Cart
   * @name RemoveFromCartDelete
   * @request DELETE:/api/RemoveFromCart
   * @response `200` `RemoveFromCartResponseDto` OK
   */
  export namespace RemoveFromCartDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductIds: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveFromCartResponseDto;
  }

  /**
   * No description
   * @tags Cart
   * @name UpdateCartProductPartialUpdate
   * @request PATCH:/api/UpdateCartProduct
   * @response `200` `UpdateCartResponseDto` OK
   */
  export namespace UpdateCartProductPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateCartProductOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateCartResponseDto;
  }

  /**
   * No description
   * @tags Common
   * @name GetClientInfoList
   * @request GET:/api/GetClientInfo
   * @response `200` `GetClientInfoResponseDto` OK
   */
  export namespace GetClientInfoList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetClientInfoResponseDto;
  }

  /**
   * No description
   * @tags Common
   * @name ForYouCreate
   * @request POST:/api/ForYou
   * @response `200` `ForYouResponseDto` OK
   */
  export namespace ForYouCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ForYouResponseDto;
  }

  /**
   * No description
   * @tags Common
   * @name GetDocumentList
   * @request GET:/api/GetDocument
   * @response `200` `GetDocumentResponseDto` OK
   */
  export namespace GetDocumentList {
    export type RequestParams = {};
    export type RequestQuery = {
      Id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetDocumentResponseDto;
  }

  /**
   * No description
   * @tags Common
   * @name UpdateClientInfoPartialUpdate
   * @request PATCH:/api/UpdateClientInfo
   * @response `200` `UpdateClientInfoResponseDto` OK
   */
  export namespace UpdateClientInfoPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateClientInfoOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateClientInfoResponseDto;
  }

  /**
   * No description
   * @tags Orders
   * @name GetClientOrdersList
   * @request GET:/api/GetClientOrders
   * @response `200` `GetClientOrdersResponseDto` OK
   */
  export namespace GetClientOrdersList {
    export type RequestParams = {};
    export type RequestQuery = {
      OrderId?: string;
      FilterByText?: string;
      FilterByStatus?: OrderStatus;
      SortMode?: SortMode;
      /** @format date-time */
      FilterByStartDate?: string;
      /** @format date-time */
      FilterByEndDate?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetClientOrdersResponseDto;
  }

  /**
   * No description
   * @tags Orders
   * @name GetOrderDetailsList
   * @request GET:/api/GetOrderDetails
   * @response `200` `GetOrderDetailsResponseDto` OK
   */
  export namespace GetOrderDetailsList {
    export type RequestParams = {};
    export type RequestQuery = {
      OrderId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOrderDetailsResponseDto;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name GetPaymentMethodDetailsList
   * @request GET:/api/GetPaymentMethodDetails
   * @response `200` `GetPaymentMethodDetailsResponseDto` OK
   */
  export namespace GetPaymentMethodDetailsList {
    export type RequestParams = {};
    export type RequestQuery = {
      MethodId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPaymentMethodDetailsResponseDto;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name AddPaymentMethodCreate
   * @request POST:/api/AddPaymentMethod
   * @response `200` `AddPaymentMethodResponseDto` OK
   */
  export namespace AddPaymentMethodCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddPaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddPaymentMethodResponseDto;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name DeletePaymentMethodDelete
   * @request DELETE:/api/DeletePaymentMethod
   * @response `200` `DeletePaymentMethodResponseDto` OK
   */
  export namespace DeletePaymentMethodDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      MethodId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeletePaymentMethodResponseDto;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name SetDefaultPaymentMethodPartialUpdate
   * @request PATCH:/api/SetDefaultPaymentMethod
   * @response `200` `SetDefaultPaymentMethodResponseDto` OK
   */
  export namespace SetDefaultPaymentMethodPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetDefaultPaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = SetDefaultPaymentMethodResponseDto;
  }

  /**
   * No description
   * @tags PaymentMethods
   * @name UpdatePaymentMethodPartialUpdate
   * @request PATCH:/api/UpdatePaymentMethod
   * @response `200` `UpdatePaymentMethodResponseDto` OK
   */
  export namespace UpdatePaymentMethodPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdatePaymentMethodOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = UpdatePaymentMethodResponseDto;
  }

  /**
   * No description
   * @tags Product
   * @name GetProductReviewsList
   * @request GET:/api/GetProductReviews
   * @response `200` `GetProductReviewsResponseDto` OK
   */
  export namespace GetProductReviewsList {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductId?: string;
      ReviewId?: string;
      AuthorId?: string;
      /** @format double */
      FilterByRating?: number;
      SortMode?: SortMode;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProductReviewsResponseDto;
  }

  /**
   * No description
   * @tags Product
   * @name ProductDetailList
   * @request GET:/api/ProductDetail
   * @response `200` `ProductDetailResponseDto` OK
   */
  export namespace ProductDetailList {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductDetailResponseDto;
  }

  /**
   * No description
   * @tags Product
   * @name ProductOffersList
   * @request GET:/api/ProductOffers
   * @response `200` `ProductOffersdResponseDto` OK
   */
  export namespace ProductOffersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductOffersdResponseDto;
  }

  /**
   * No description
   * @tags Product
   * @name SearchProductsList
   * @request GET:/api/SearchProducts
   * @response `200` `SearchProductsResponseDto` OK
   */
  export namespace SearchProductsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SearchProductsResponseDto;
  }

  /**
   * No description
   * @tags Product
   * @name WriteReviewCreate
   * @request POST:/api/WriteReview
   * @response `200` `WriteReviewResponseDto` OK
   */
  export namespace WriteReviewCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WriteReviewOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = WriteReviewResponseDto;
  }

  /**
   * No description
   * @tags Purchase
   * @name ExecutePurchaseCreate
   * @request POST:/api/ExecutePurchase
   * @response `200` `ExecutePurchaseResponseDto` OK
   */
  export namespace ExecutePurchaseCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ExecutePurchaseOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExecutePurchaseResponseDto;
  }

  /**
   * No description
   * @tags Purchase
   * @name GetCheckoutInfoList
   * @request GET:/api/GetCheckoutInfo
   * @response `200` `GetCheckoutInfoResponseDto` OK
   */
  export namespace GetCheckoutInfoList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetCheckoutInfoOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = GetCheckoutInfoResponseDto;
  }

  /**
   * No description
   * @tags Wishlist
   * @name AddToWishlistCreate
   * @request POST:/api/AddToWishlist
   * @response `200` `AddToWishlistResponseDto` OK
   */
  export namespace AddToWishlistCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddToWishlistOperationInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = AddToWishlistResponseDto;
  }

  /**
   * No description
   * @tags Wishlist
   * @name GetWishlist
   * @request GET:/api/GetWishlist
   * @response `200` `GetWishlistResponseDto` OK
   */
  export namespace GetWishlist {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetWishlistResponseDto;
  }

  /**
   * No description
   * @tags Wishlist
   * @name RemoveFromWishlistDelete
   * @request DELETE:/api/RemoveFromWishlist
   * @response `200` `RemoveFromWishlistResponseDto` OK
   */
  export namespace RemoveFromWishlistDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      ProductId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveFromWishlistResponseDto;
  }
}
