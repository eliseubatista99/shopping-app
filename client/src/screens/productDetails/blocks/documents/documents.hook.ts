import type { DocumentDto } from "@api";
import { useAppTranslations, useDocument } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useDocumentsBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { t } = useAppTranslations();
  const { readDocument } = useDocument();

  const i18n = React.useMemo(() => {
    return {
      title: t("productDetails.documents.title"),
    };
  }, [t]);

  const onClickDocument = React.useCallback(
    async (doc: DocumentDto) => {
      if (doc.id) {
        await readDocument(doc.id);
      }
    },
    [readDocument]
  );

  return {
    i18n,
    docs: selectedProduct?.documents || [],
    onClickDocument,
  };
};
