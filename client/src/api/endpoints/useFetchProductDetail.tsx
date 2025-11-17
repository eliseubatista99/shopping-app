import { useCallback } from "react";
import type { ProductDetailDto } from "../types";

export type ProductDetailOutputDto = {
  product: ProductDetailDto;
};

export type ProductDetailInputDto = {
  productId: string;
};

export const useFetchProductDetail = () => {
  //   const fetchHook = useFetch();

  const fetch = useCallback(async (input: ProductDetailInputDto) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    console.debug("Fetching product detail for id:", input.productId);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: ProductDetailOutputDto = {
      product: {
        id: "1",
        name: "Mesinha cebeceira VASAGÇLE",
        image:
          "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
        price: 40.59,
        score: 4,
        description: "Description",
      },
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
