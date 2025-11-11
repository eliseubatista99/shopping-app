import { useCallback } from "react";
import type { BasketOutputDto } from "../types";

export const useFetchBasket = () => {
  //   const fetchHook = useFetch();

  const fetch = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: BasketOutputDto = {
      basket: {
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
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
