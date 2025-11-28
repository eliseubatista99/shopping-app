import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, DocumentDto } from "../types";

export type GetDocumentOutputDto = {
  document: DocumentDto;
};

export type GetDocumentInputDto = {
  id: string;
};

export const GetDocument = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: GetDocumentInputDto) => {
      const result = await get<ApiOutput<GetDocumentOutputDto>>(
        `${ApiConfigs.endpoint}/GetDocument`,
        {
          ...input,
        }
      );

      return result;
    },
    [get]
  );

  return {
    fetchGetDocument: fetch,
  };
};
