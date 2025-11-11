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

    const result: ProductOffersOutputDto = {
      fromSearchHistory: [
        {
          id: "1",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "2",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "3",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "4",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
      ],
      buyAgain: [
        {
          id: "1",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "2",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "3",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
        {
          id: "4",
          name: "Mesinha cebeceira VASAGÇLE",
          image:
            "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          price: 40.59,
        },
      ],
      groups: [
        {
          category: "home",
          products: [
            {
              id: "1",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
            },
            {
              id: "2",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
            },
            {
              id: "3",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
            },
            {
              id: "4",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
            },
          ],
        },
      ],
      banners: [
        {
          category: "christmas",
          products: [
            {
              id: "1",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
            },
          ],
        },
        {
          category: "portuguese",
          products: [
            {
              id: "1",
              name: "Mesinha cebeceira VASAGÇLE",
              image:
                "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
              price: 40.59,
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
