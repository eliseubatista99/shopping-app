import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../types";

export type AddAddressInputDto = {
  name: string;
  postalCode: string;
  city: string;
  street: string;
  country: string;
  countryCode: string;
  isDefault: boolean;
};

export type AddAddressOutputDto = {
  updatedAddresses: AddressDto[];
};

export const AddAddress = () => {
  const { post } = useFetchWithAuth<AddAddressOutputDto>({
    endpoint: "AddAddress",
  });

  const fetch = useCallback(
    async (input: AddAddressInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddAddress: fetch,
  };
};
