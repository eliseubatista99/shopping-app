import { AppLayout, AppLoader, Tag } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { SellerListItem } from "src/components/sellerListItem";
import { useProductDetailsPageHelper } from "./productDetails.hook";

export const ProductDetailsMobile: React.FC = () => {
  const { product, loading, i18n } = useProductDetailsPageHelper();

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
          <SellerListItem seller={product.seller} />
          <Typography styles={{ fontSize: "16px", marginTop: "20px" }}>
            {product.name}
          </Typography>
          {product.bestSeller && (
            <Tag
              text={i18n.tags.bestSeller}
              textProps={{
                styles: {
                  color: "#ffffff",
                  fontSize: "14px",
                },
              }}
              styles={{
                background: "#8a0000ff",
                marginTop: "6px",
              }}
            />
          )}
        </>
      )}
    </AppLayout>
  );
};
