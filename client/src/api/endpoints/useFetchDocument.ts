import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { GetDocumentListParams, GetDocumentResponseDto } from "../models";

export const GetDocument = () => {
  const { get } = useFetchNoAuth<GetDocumentResponseDto>({
    endpoint: "GetDocument",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetDocumentListParams) => {
      const result = await get({
        ...input,
      });

      return result;
    },
    [get]
  );

  return {
    fetchGetDocument: fetch,
  };
};
