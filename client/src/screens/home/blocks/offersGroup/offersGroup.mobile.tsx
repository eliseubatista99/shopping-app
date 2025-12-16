import { ProductGridItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import type { OffersGroupBlockProps } from "./offersGroup";
import { useOffersGroupBlockHelper } from "./offersGroup.hook";

export const OffersGroupBlockMobile: React.FC<OffersGroupBlockProps> = ({
  title,
  products,
}) => {
  const { onClickProduct } = useOffersGroupBlockHelper();

  const offersJSX = products.map((p) => (
    <ProductGridItem key={p.id} product={p} onClick={() => onClickProduct(p)} />
  ));

  return (
    <div style={{ width: "100%", display: "flex", gap: "20px" }}>
      <Typography styles={{ fontWeight: "600", fontSize: "18px" }}>
        {title}
      </Typography>
      <div
        style={{
          width: "100%",
          gap: "30px",
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 150px)",
          justifyContent: "center",
        }}
      >
        {offersJSX}
      </div>
    </div>
  );
};
