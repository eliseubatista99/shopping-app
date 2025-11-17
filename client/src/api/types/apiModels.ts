export type ProductDto = {
  id: string;
  name: string;
  image: string;
  price: number;
  score: number;
  freeShipping?: boolean;
  bestSeller?: boolean;
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
