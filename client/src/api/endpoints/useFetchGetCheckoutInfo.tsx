import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetCheckoutInfoOperationInputDto,
  GetCheckoutInfoResponseDto,
} from "../models";

export const GetCheckoutInfo = () => {
  const { get } = useFetchWithAuth<GetCheckoutInfoResponseDto>({
    endpoint: "GetCheckoutInfo",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetCheckoutInfoOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetCheckoutInfo: fetch,
  };
};
