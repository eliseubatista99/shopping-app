import { useFetchGetDocument } from "@api";
import { useCallback } from "react";

export const useDocument = () => {
  const { fetch: fetchGetDocument } = useFetchGetDocument();

  const readDocument = useCallback(
    async (docId: string) => {
      const res = await fetchGetDocument({ id: docId });

      console.log(res.data.document);
    },
    [fetchGetDocument]
  );

  return {
    readDocument,
  };
};
