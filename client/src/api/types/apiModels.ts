export type ProductDto = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  score: number;
  scoreCount: number;
  freeShipping?: boolean;
  bestSeller?: boolean;
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
  description: string;
  specifications: string;
  documents: DocumentDto[];
  seller: SellerDto;
  detailImages: string[];
  productOptions: ProductDto[];
  relatedProducts: ProductDto[];
  comboProducts: ProductDto[];
  reviews: ReviewDto[];
};

export type BasketDto = {
  products: ProductDto[];
};

export type BasketOutputDto = {
  basket: BasketDto;
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
