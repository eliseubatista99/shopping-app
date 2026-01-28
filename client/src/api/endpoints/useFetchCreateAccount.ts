import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  CreateAccountOperationInputDto,
  CreateAccountResponseDto,
} from "../models";

export const CreateAccount = () => {
  const { post } = useFetchNoAuth<CreateAccountResponseDto>({
    endpoint: "CreateAccount",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: CreateAccountOperationInputDto) => {
      const result = await post({ ...input }, { credentials: "include" });

      return result;
    },
    [post]
  );

  return {
    fetchCreateAccount: fetch,
  };
};
