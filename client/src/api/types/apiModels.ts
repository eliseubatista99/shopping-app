export type ProductDto = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export type BasketDto = {
  products: ProductDto[];
};

export type BasketOutputDto = {
  basket: BasketDto;
};

export type AddressDto = {
  postalCode: string;
  city: string;
  street: string;
  country: string;
  countryCode: string;
};

export type ClientInfoDto = {
  name: string;
  address: AddressDto;
};

export type ProductOfferGroupDto = {
  products: ProductDto[];
  category: string;
};
