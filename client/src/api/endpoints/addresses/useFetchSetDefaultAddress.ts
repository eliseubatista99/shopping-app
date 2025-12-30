import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../models";

export type SetDefaultAddressInputDto = {
  addressId: string;
};

export type SetDefaultAddressOutputDto = {
  updatedAddresses: AddressDto[];
};

export const SetDefaultAddress = () => {
  const { patch } = useFetchWithAuth<SetDefaultAddressOutputDto>({
    endpoint: "SetDefaultAddress",
  });

  const fetch = useCallback(
    async (input: SetDefaultAddressInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchSetDefaultAddress: fetch,
  };
};
