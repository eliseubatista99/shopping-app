import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AddAddressOperationInputDto,
  AddAddressResponseDto,
} from "../../models";

export const AddAddress = () => {
  const { post } = useFetchWithAuth<AddAddressResponseDto>({
    endpoint: "AddAddress",
  });

  const fetch = useCallback(
    async (input: AddAddressOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddAddress: fetch,
  };
};
