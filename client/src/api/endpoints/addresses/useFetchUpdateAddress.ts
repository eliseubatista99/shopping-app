import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../types";

export type UpdateAddressInputDto = {
  address: AddressDto;
};

export type UpdateAddressOutputDto = {
  updatedAddresses: AddressDto[];
};

export const UpdateAddress = () => {
  const { post } = useFetchWithAuth<UpdateAddressOutputDto>({
    endpoint: "UpdateAddress",
  });

  const fetch = useCallback(
    async (input: UpdateAddressInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchUpdateAddress: fetch,
  };
};
