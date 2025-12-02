import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";

export type RefreshAuthenticationOutputDto = { token: string };

export const RefreshAuthentication = () => {
  const { post } = useFetchNoAuth<RefreshAuthenticationOutputDto>({
    endpoint: "RefreshAuthentication",
  });

  const fetch = useCallback(async () => {
    const result = await post({}, { credentials: "include" });

    return result;
  }, [post]);

  return {
    fetchRefreshAuthentication: fetch,
  };
};
