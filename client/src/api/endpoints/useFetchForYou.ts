import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ForYouResponseDto } from "../models";

export const GetForYou = () => {
  const { get } = useFetchWithAuth<ForYouResponseDto>({
    endpoint: "ForYou",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchForYou: fetch,
  };
};
