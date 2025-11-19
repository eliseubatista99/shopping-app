export type ApiOutputMetadata = {
  success: boolean;
};

export type ApiOutput<T> = {
  data: T;
  metadata: ApiOutputMetadata;
};

export type ProductDto = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  score: number;
  scoreCount: number;
  shippingCost?: number;
  bestSeller?: boolean;
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
  content: string;
};

export type ReviewDto = {
  id: string;
  reviewer: string;
  reviewerIcon?: string;
  score: number;
  title: string;
  comment: string;
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

export type CartDto = {
  products: ProductDto[];
};

export type CartOutputDto = {
  cart: CartDto;
};

export type AddressDto = {
  name: string;
  postalCode: string;
  city: string;
  street: string;
  country: string;
  countryCode: string;
  isDefault: boolean;
  isSelected: boolean;
};

export type ClientInfoDto = {
  name: string;
  addresses: AddressDto[];
};

export type ProductOfferGroupDto = {
  products: ProductDto[];
  category: string;
};
