import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const { i18n, product } = useProductBlockHelper();

  return (
    <>
      {product && (
        <div
          style={{
            width: "100%",
            flexDirection: "row",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Image
            src={product.image}
            styles={{
              width: "50px",
              height: "50px",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              background: "none",
              mixBlendMode: "multiply",
            }}
          />
          <div style={{ flex: 1 }}>
            <Typography styles={{ fontWeight: 800, fontSize: "18px" }}>
              {i18n.title}
            </Typography>
            <Typography>{product.name}</Typography>
          </div>
        </div>
      )}
    </>
  );
};
