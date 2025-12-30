import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  DeleteAddressParams,
  DeleteAddressResponseDto,
} from "../../models";

export const DeleteAddress = () => {
  const { delete: httpDelete } = useFetchWithAuth<DeleteAddressResponseDto>({
    endpoint: "DeleteAddress",
  });

  const fetch = useCallback(
    async (input: DeleteAddressParams) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchDeleteAddress: fetch,
  };
};
