import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  RemoveFromCartOperationInputDto,
  RemoveFromCartResponseDto,
} from "../../models";

export const RemoveFromCart = () => {
  const { delete: httpDelete } = useFetchWithAuth<RemoveFromCartResponseDto>({
    endpoint: "RemoveFromCart",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: RemoveFromCartOperationInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchRemoveFromCart: fetch,
  };
};
