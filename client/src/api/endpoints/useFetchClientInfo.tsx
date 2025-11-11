import { useCallback } from "react";
import type { ClientInfoDto } from "../types";

export type ClientInfoOutputDto = {
  client: ClientInfoDto;
  itemsInBasket: number;
};

export const useFetchClientInfo = () => {
  //   const fetchHook = useFetch();

  const fetch = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: ClientInfoOutputDto = {
      client: {
        name: "Elideus Kuduro",
        address: {
          postalCode: "6123-456",
          city: "Fundão",
          street: "Rua Bonita",
          country: "Portugal",
          countryCode: "PT",
        },
      },
      itemsInBasket: 2,
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
