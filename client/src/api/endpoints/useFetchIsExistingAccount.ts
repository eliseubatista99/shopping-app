import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";

export type IsExistingAccountOutputDto = {
  exists: boolean;
};

export type IsExistingAccountInputDto = {
  email?: string;
  phoneNumber?: string;
};

export const IsExistingAccount = () => {
  const { get } = useFetchNoAuth<IsExistingAccountOutputDto>({
    endpoint: "IsExistingAccount",
  });

  const fetch = useCallback(
    async (input: IsExistingAccountInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchIsExistingAccount: fetch,
  };
};
