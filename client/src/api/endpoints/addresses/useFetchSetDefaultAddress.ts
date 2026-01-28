import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  SetDefaultAddressOperationInputDto,
  SetDefaultAddressResponseDto,
} from "../../models";

export const SetDefaultAddress = () => {
  const { patch } = useFetchWithAuth<SetDefaultAddressResponseDto>({
    endpoint: "SetDefaultAddress",
  });

  const fetch = useCallback(
    async (input: SetDefaultAddressOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchSetDefaultAddress: fetch,
  };
};
