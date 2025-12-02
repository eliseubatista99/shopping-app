import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../types";

export type UpdatedDefaultAddressInputDto = {
  addressId: string;
};

export type UpdatedDefaultAddressOutputDto = {
  updatedAddresses?: AddressDto[];
};

export const UpdateDefaultAddress = () => {
  const { get } = useFetchWithAuth<UpdatedDefaultAddressOutputDto>({
    endpoint: "UpdateDefaultAddress",
  });

  const fetch = useCallback(
    async (input: UpdatedDefaultAddressInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchUpdateAddress: fetch,
  };
};
