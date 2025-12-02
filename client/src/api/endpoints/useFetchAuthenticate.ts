import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";

export type AuthenticateInputDto = {
  email?: string;
  phoneNumber?: string;
  password?: string;
};

export type AuthenticateOutputDto = { token: string };

export const Authenticate = () => {
  const { post } = useFetchNoAuth<AuthenticateOutputDto>({
    endpoint: "Authenticate",
  });

  const fetch = useCallback(
    async (input: AuthenticateInputDto) => {
      const result = await post({ ...input }, { credentials: "include" });

      return result;
    },
    [post]
  );

  return {
    fetchAuthenticate: fetch,
  };
};
