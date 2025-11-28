import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { ClientInfoDto } from "../types";

export type ClientInfoOutputDto = {
  client: ClientInfoDto;
  itemsInCart: number;
};

export const GetClientInfo = () => {
  const { get } = useAppFetch<ClientInfoOutputDto>("GetClientInfo");

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchClientInfo: fetch,
  };
};
