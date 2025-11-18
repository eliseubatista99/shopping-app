import { AppLayout, AppLoader } from "@components";
import { BaseInfoBlock, PurchaseBlock, SellerBlock } from "./blocks";
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
        </>
      )}
    </AppLayout>
  );
};
