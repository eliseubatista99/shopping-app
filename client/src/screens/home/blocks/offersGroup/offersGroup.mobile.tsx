import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import type { OffersGroupBlockProps } from "./offersGroup";

export const OffersGroupBlockMobile: React.FC<OffersGroupBlockProps> = ({
  title,
  products,
}) => {
  const offersJSX = products.map((p) => (
    <div key={p.id} style={{ width: "150px", gap: "5px" }}>
      <Image
        src={p.image}
        styles={{
          width: "100%",
          aspectRatio: "1/1",
          background: "#e4e4e4ff",
          border: "1px solid #8a8a8a52",
        }}
      />
      <div style={{ width: "100%" }}>
        <Typography overflowEllipsis styles={{ fontSize: "14px" }}>
          {p.name}
        </Typography>
        <Typography styles={{ fontWeight: "500", fontSize: "16px" }}>
          {p.price}
        </Typography>
      </div>
    </div>
  ));

  return (
    <div style={{ width: "100%", display: "flex", gap: "20px" }}>
      <Typography styles={{ fontWeight: "600", fontSize: "18px" }}>
        {title}
      </Typography>{" "}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {offersJSX}
      </div>
    </div>
  );
};
