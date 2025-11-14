import { useCallback } from "react";
import type { AddressDto, ClientInfoDto } from "../types";

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

    const address: AddressDto = {
      name: "Eliseu",
      postalCode: "6123-456",
      city: "Fundão",
      street: "Rua Bonita",
      country: "Portugal",
      countryCode: "PT",
      isDefault: false,
      isSelected: false,
    };

    const result: ClientInfoOutputDto = {
      client: {
        name: "Elideus Kuduro",
        addresses: [
          { ...address, isDefault: true, isSelected: true },
          { ...address, postalCode: "1234-567", city: "Guarda" },
          { ...address, postalCode: "31321-434", city: "Pinhel" },
        ],
      },
      itemsInBasket: 2,
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
