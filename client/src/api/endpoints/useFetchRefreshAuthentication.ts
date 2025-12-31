import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { RefreshAuthenticationResponseDto } from "../models";

export const RefreshAuthentication = () => {
  const { post } = useFetchNoAuth<RefreshAuthenticationResponseDto>({
    endpoint: "RefreshAuthentication",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(async () => {
    const result = await post({}, { credentials: "include" });

    return result;
  }, [post]);

  return {
    fetchRefreshAuthentication: fetch,
  };
};
