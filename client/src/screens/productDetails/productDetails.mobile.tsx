import { AppLayout, AppLoader } from "@components";
import {
  BaseInfoBlock,
  CombinationBlock,
  PurchaseBlock,
  RelatedBlock,
  SellerBlock,
  SpecificationsBlock,
} from "./blocks";
import { DocumentsBlock } from "./blocks/documents";
import { useProductDetailsPageHelper } from "./productDetails.hook";

export const ProductDetailsMobile: React.FC = () => {
  const { product, loading } = useProductDetailsPageHelper();

  return (
    <AppLayout
      pageStyles={{ padding: "12px" }}
      appHeader={{
        withBack: true,
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && product && (
        <>
          <SellerBlock />
          <BaseInfoBlock />
          <PurchaseBlock />
          <CombinationBlock />
          <RelatedBlock />
          <SpecificationsBlock />
          <DocumentsBlock />
        </>
      )}
    </AppLayout>
  );
};
