import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { AddressDto, ApiOutput } from "../types";

export type UpdatedSelectedAddressInputDto = {
  address: AddressDto;
};

export type UpdatedSelectedAddressOutputDto = {
  updatedAddresses?: AddressDto[];
};

export const useFetchUpdateSelectedAddress = () => {
  const { post } = useFetch();

  const fetch = useCallback(
    async (input: UpdatedSelectedAddressInputDto) => {
      const result = await post<ApiOutput<UpdatedSelectedAddressOutputDto>>(
        `${ApiConfigs.endpoint}/UpdateSelectedAddress`,
        { ...input }
      );

      return result;
    },
    [post]
  );

  return {
    fetch,
  };
};
