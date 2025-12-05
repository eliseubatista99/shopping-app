import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../types";

export type AddAddressInputDto = {
  address: AddressDto;
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
