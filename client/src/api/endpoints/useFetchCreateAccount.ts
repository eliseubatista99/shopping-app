import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";

export type CreateAccountInputDto = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type CreateAccountOutputDto = { token: string };

export const CreateAccount = () => {
  const { post } = useFetchNoAuth<CreateAccountOutputDto>({
    endpoint: "CreateAccount",
  });

  const fetch = useCallback(
    async (input: CreateAccountInputDto) => {
      const result = await post({ ...input }, { credentials: "include" });

      return result;
    },
    [post]
  );

  return {
    fetchCreateAccount: fetch,
  };
};
