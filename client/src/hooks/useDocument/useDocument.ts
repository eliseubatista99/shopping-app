import { Api } from "@api";
import { usePdfGenerator } from "@eliseubatista99/react-scaffold-pdf";
import { useCallback } from "react";

export const useDocument = () => {
  const { fetchGetDocument } = Api.GetDocument();
  const { downloadPdf, generateBase64Pdf } = usePdfGenerator();

  const readDocument = useCallback(
    async (docId: string) => {
      const res = await fetchGetDocument({ id: docId });

      const pdf = await generateBase64Pdf(res.data.document.content || "");
      downloadPdf(pdf.url || "");
    },
    [fetchGetDocument, generateBase64Pdf, downloadPdf]
  );

  return {
    readDocument,
  };
};
