import { Typography } from "@eliseubatista99/react-scaffold-core";
import { ProductImage } from "../../../../components";
import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const { i18n, productImage, productName } = useProductBlockHelper();

  return (
    <>
      {productImage && productName && (
        <div
          style={{
            width: "100%",
            flexDirection: "row",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <ProductImage
            image={productImage}
            styles={{
              width: "50px",
              height: "50px",
            }}
          />
          <div style={{ flex: 1 }}>
            <Typography styles={{ fontWeight: 800, fontSize: "18px" }}>
              {i18n.title}
            </Typography>
            <Typography>{productName}</Typography>
          </div>
        </div>
      )}
    </>
  );
};
