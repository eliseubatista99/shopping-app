import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AddAddressOperationInputDto,
  AddAddressOperationOutputDto,
} from "../../models";

export const AddAddress = () => {
  const { post } = useFetchWithAuth<AddAddressOperationOutputDto>({
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
