import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  IsExistingAccountListParams,
  IsExistingAccountResponseDto,
} from "../models";

export const IsExistingAccount = () => {
  const { get } = useFetchNoAuth<IsExistingAccountResponseDto>({
    endpoint: "IsExistingAccount",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: IsExistingAccountListParams) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchIsExistingAccount: fetch,
  };
};
