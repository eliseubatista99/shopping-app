import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AuthenticateOperationInputDto,
  AuthenticateResponseDto,
} from "../models";

export const Authenticate = () => {
  const { post } = useFetchNoAuth<AuthenticateResponseDto>({
    endpoint: "Authenticate",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: AuthenticateOperationInputDto) => {
      const result = await post({ ...input });

      console.log("RES", document.cookie);

      return result;
    },
    [post]
  );

  return {
    fetchAuthenticate: fetch,
  };
};
