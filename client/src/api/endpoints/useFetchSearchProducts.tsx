import { useCallback } from "react";
import type { ProductDto } from "../types";

export type SearchProductsInputDto = {
  keyword: string;
};

export type SearchProductsOutputDto = {
  products?: ProductDto[];
};

export const useFetchSearchProducts = () => {
  //   const fetchHook = useFetch();
  const fetch = useCallback(async (input: SearchProductsInputDto) => {
    console.debug("Search Products > ", input);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockProduct: ProductDto = {
      id: "1",
      name: "Mesinha cebeceira VASAGÇLE",
      image:
        "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
      price: 40.59,
    };

    const result: SearchProductsOutputDto = {
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
    };
    return result;
  }, []);

  return {
    fetch,
  };
};
