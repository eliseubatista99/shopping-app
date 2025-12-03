export type ApiOutputMetadata = {
  success: boolean;
};

export type ApiOutput<T> = {
  data: T;
  metadata: ApiOutputMetadata;
};

export enum SortMode {
  LowToHighScore = "LowToHighScore",
  HightToLowScore = "HightToLowScore",
  LowToHighPrice = "LowToHighPrice",
  HighToLowPrice = "HighToLowPrice",
  NewToOld = "NewToOld",
  OldToNew = "OldToNew",
}

export enum PaymentMethodType {
  Card = "Card",
  Bank = "Bank",
}

export type ProductDto = {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  score?: number;
  scoreCount?: number;
  shippingCost?: number;
  bestSeller?: boolean;
  isWishlisted?: boolean;
};

export type CheckoutProductDto = ProductDto & {
  quantity?: number;
};

export type CartProductDto = ProductDto & {
  quantity?: number;
  isSelected?: boolean;
};

export type ProductSpecificationsDto = {
  brand: string;
  model: string;
  origin?: string;
  manufacturer?: string;
  height?: number;
  width?: number;
  depth?: number;
  warranty?: number;
};

export type ProductOptionDto = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
};

export type SellerDto = {
  id: string;
  name: string;
  image: string;
};

export type DocumentDto = {
  id: string;
  name: string;
  content?: string;
};

export type ReviewDto = {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerIcon?: string;
  score: number;
  title: string;
  comment: string;
  productId: string;
  productName: string;
  productIcon: string;
};

export type ProductDetailDto = ProductDto & {
  specifications: ProductSpecificationsDto;
  documents: DocumentDto[];
  seller: SellerDto;
  detailImages: string[];
  productOptions: ProductOptionDto[];
  relatedProducts: ProductDto[];
  comboProducts: ProductDto[];
  reviews: ReviewDto[];
  estimatedDeliveryDate: string;
};

export type AddressDto = {
  id: string;
  name: string;
  postalCode: string;
  city: string;
  street: string;
  country: string;
  countryCode: string;
  isDefault: boolean;
};

export type PaymentMethodDto = {
  id: string;
  type: PaymentMethodType;
  name: string;
  network: string;
  image: string;
  cardNumber: string;
  expirationMonth: number;
  expirationYear: number;
  isDefault: boolean;
};

export type ClientInfoDto = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  phoneNumberPrefix: string;
  image: string;
  addresses: AddressDto[];
  paymentMethods: PaymentMethodDto[];
};

export type ProductOfferGroupDto = {
  products: ProductDto[];
  category: string;
};

export type ScoreCountDto = {
  score: number;
  count: number;
};

export enum OrderStatus {
  Processing = "Processing",
  Sent = "Sent",
  InDelivery = "InDelivery",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

export type OrderStatusEntry = {
  status: OrderStatus;
  date: string;
};

export type OrderDto = {
  id: string;
  product: ProductDto;
  date: string;
  currentStatus: OrderStatusEntry;
};

export type OrderDetailDto = OrderDto & {
  seller: SellerDto;
  statusHistory: OrderStatusEntry[];
  paymentMethod: PaymentMethodDto;
  address: AddressDto;
  productsCost: number;
  shippingCost: number;
  discounts: number;
  totalCost: number;
};
