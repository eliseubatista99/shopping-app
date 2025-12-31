import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  RefreshAuthenticationOperationInputDto,
  RefreshAuthenticationResponseDto,
} from "../models";

export const RefreshAuthentication = () => {
  const { post } = useFetchNoAuth<RefreshAuthenticationResponseDto>({
    endpoint: "RefreshAuthentication",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: RefreshAuthenticationOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchRefreshAuthentication: fetch,
  };
};
