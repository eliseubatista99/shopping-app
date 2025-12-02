import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { DocumentDto } from "../types";

export type GetDocumentOutputDto = {
  document: DocumentDto;
};

export type GetDocumentInputDto = {
  id: string;
};

export const GetDocument = () => {
  const { get } = useAppFetch<GetDocumentOutputDto>({
    endpoint: "GetDocument",
  });

  const fetch = useCallback(
    async (input: GetDocumentInputDto) => {
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
