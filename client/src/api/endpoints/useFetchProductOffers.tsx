import { useCallback } from "react";
import type { ProductDto, ProductOfferGroupDto } from "../types";

export type ProductOffersOutputDto = {
  fromSearchHistory: ProductDto[];
  buyAgain: ProductDto[];
  groups: ProductOfferGroupDto[];
  banners: ProductOfferGroupDto[];
};

export const useFetchProductOffers = () => {
  //   const fetchHook = useFetch();

  const fetch = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockProduct: ProductDto = {
      id: "1",
      name: "Mesinha cebeceira VASAGÇLE",
      image:
        "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
      price: 40.59,
      score: 4,
      originalPrice: 40.59,
      scoreCount: 345,
    };

    const result: ProductOffersOutputDto = {
      fromSearchHistory: [
        {
          ...mockProduct,
          id: "1",
        },
        {
          ...mockProduct,
          id: "2",
        },
        {
          ...mockProduct,
          id: "3",
        },
        {
          ...mockProduct,
          id: "4",
        },
      ],
      buyAgain: [
        {
          ...mockProduct,
          id: "1",
        },
        {
          ...mockProduct,
          id: "2",
        },
        {
          ...mockProduct,
          id: "3",
        },
        {
          ...mockProduct,
          id: "4",
        },
      ],
      groups: [
        {
          category: "home",
          products: [
            {
              ...mockProduct,
              id: "1",
            },
            {
              ...mockProduct,
              id: "2",
            },
            {
              ...mockProduct,
              id: "3",
            },
            {
              ...mockProduct,
              id: "4",
            },
          ],
        },
      ],
      banners: [
        {
          category: "christmas",
          products: [
            {
              ...mockProduct,
              id: "1",
            },
          ],
        },
        {
          category: "portuguese",
          products: [
            {
              ...mockProduct,
              id: "1",
            },
          ],
        },
      ],
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
