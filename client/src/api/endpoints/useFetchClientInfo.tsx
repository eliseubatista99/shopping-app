import { MODALS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ClientInfoDto } from "../types";

export type ClientInfoOutputDto = {
  client: ClientInfoDto;
  itemsInCart: number;
};

export const GetClientInfo = () => {
  const { showItem } = useFeedback();

  const { get } = useFetchWithAuth<ClientInfoOutputDto>({
    endpoint: "GetClientInfo",
    showGenericErrorModal: false,
    onError: () => {
      showItem(MODALS.TRY_AGAIN_CLIENT_INFO);
    },
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchClientInfo: fetch,
  };
};
