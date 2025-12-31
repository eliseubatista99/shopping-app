import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetDocumentOperationInputDto,
  GetDocumentResponseDto,
} from "../models";

export const GetDocument = () => {
  const { get } = useFetchNoAuth<GetDocumentResponseDto>({
    endpoint: "GetDocument",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetDocumentOperationInputDto) => {
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
