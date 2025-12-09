import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { AddressDto } from "../../types";

export type UpdateAddressInputDto = {
  id: string;
  name: string;
  postalCode: string;
  city: string;
  street: string;
  country: string;
  countryCode: string;
  isDefault: boolean;
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
