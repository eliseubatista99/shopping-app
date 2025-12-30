import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../models";

export type DeleteAddressInputDto = {
  addressId: string;
};

export type DeleteAddressOutputDto = {
  updatedAddresses: AddressDto[];
};

export const DeleteAddress = () => {
  const { delete: httpDelete } = useFetchWithAuth<DeleteAddressOutputDto>({
    endpoint: "DeleteAddress",
  });

  const fetch = useCallback(
    async (input: DeleteAddressInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchDeleteAddress: fetch,
  };
};
