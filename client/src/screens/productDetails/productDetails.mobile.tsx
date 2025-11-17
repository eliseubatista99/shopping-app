import { AppLayout, AppLoader } from "@components";
import { useProductDetailsPageHelper } from "./productDetails.hook";

export const ProductDetailsMobile: React.FC = () => {
  const { product, loading } = useProductDetailsPageHelper();

  return (
    <AppLayout
      pageStyles={{
        padding: 0,
      }}
      appHeader={{
        withBack: true,
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && product?.name}
    </AppLayout>
  );
};
