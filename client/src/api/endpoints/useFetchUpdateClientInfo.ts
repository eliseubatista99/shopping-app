import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ClientInfoDto } from "../types";

export type UpdateClientInfoInputDto = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
};

export type UpdateClientInfoOutputDto = { updatedInfo: ClientInfoDto };

export const UpdateClientInfo = () => {
  const { post } = useFetchWithAuth<UpdateClientInfoOutputDto>({
    endpoint: "UpdateClientInfo",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: UpdateClientInfoInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchUpdateClientInfo: fetch,
  };
};
