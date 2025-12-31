import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  UpdateClientInfoOperationInputDto,
  UpdateClientInfoResponseDto,
} from "../models";

export const UpdateClientInfo = () => {
  const { patch } = useFetchWithAuth<UpdateClientInfoResponseDto>({
    endpoint: "UpdateClientInfo",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: UpdateClientInfoOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdateClientInfo: fetch,
  };
};
