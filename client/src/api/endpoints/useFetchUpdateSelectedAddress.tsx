import { useCallback } from "react";
import type { AddressDto } from "../types";

export type UpdatedSelectedAddressInputDto = {
  address: AddressDto;
};

export type UpdatedSelectedAddressOutputDto = {
  updatedAddress?: AddressDto;
};

export const useFetchUpdateSelectedAddress = () => {
  //   const fetchHook = useFetch();
  const fetch = useCallback(async (input: UpdatedSelectedAddressInputDto) => {
    console.debug("Update Selected Address > ", input);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: AddressDto = {
      postalCode: "6123-789",
      city: "Fundão Updated",
      street: "Rua Bonita  Updated",
      country: "Portugal  Updated",
      countryCode: "PT  Updated",
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
