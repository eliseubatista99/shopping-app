import { Assets } from "@assets";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const { product, onClickBack } = useProductBlockHelper();

  return (
    <>
      {product && (
        <div
          style={{
            width: "100%",
            background: "#edededff",
            flexDirection: "row",
            padding: "10px",
            alignItems: "center",
            gap: "6px",
            borderBottom: "1px solid #a8a8a8ff",
          }}
        >
          <Assets.Icons.NavLeft
            width="20px"
            height="20px"
            onClick={() => onClickBack()}
          />
          <Typography styles={{ fontSize: "17px", fontWeight: 600 }}>
            {product.name}
          </Typography>
        </div>
      )}
    </>
  );
};
