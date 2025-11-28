import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { AddressDto, ApiOutput } from "../types";

export type UpdatedDefaultAddressInputDto = {
  addressId: string;
};

export type UpdatedDefaultAddressOutputDto = {
  updatedAddresses?: AddressDto[];
};

export const UpdateDefaultAddress = () => {
  const { post } = useFetch();

  const fetch = useCallback(
    async (input: UpdatedDefaultAddressInputDto) => {
      const result = await post<ApiOutput<UpdatedDefaultAddressOutputDto>>(
        `${ApiConfigs.endpoint}/UpdateDefaultAddress`,
        { ...input }
      );

      return result;
    },
    [post]
  );

  return {
    fetchUpdateAddress: fetch,
  };
};
