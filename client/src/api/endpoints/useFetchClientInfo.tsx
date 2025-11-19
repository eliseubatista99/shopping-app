import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ClientInfoDto } from "../types";

export type ClientInfoOutputDto = {
  client: ClientInfoDto;
  itemsInCart: number;
};

export const useFetchClientInfo = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<ClientInfoOutputDto>>(
      `${ApiConfigs.endpoint}/GetClientInfo`
    );

    return result;
  }, [get]);

  return {
    fetch,
  };
};
