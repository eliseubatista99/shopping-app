import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  UpdateAddressOperationInputDto,
  UpdateAddressResponseDto,
} from "../../models";

export const UpdateAddress = () => {
  const { patch } = useFetchWithAuth<UpdateAddressResponseDto>({
    endpoint: "UpdateAddress",
  });

  const fetch = useCallback(
    async (input: UpdateAddressOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdateAddress: fetch,
  };
};
