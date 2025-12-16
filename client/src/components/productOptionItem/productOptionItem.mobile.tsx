import { CurrencyBlock } from "@components";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import type { ProductOptionItemProps } from "./productOptionItem";

export const ProductOptionItemMobile: React.FC<ProductOptionItemProps> = ({
  option,
  styles,
  currency,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick?.()}
      style={{
        width: "130px",
        height: "fit-content",
        minHeight: "100px",
        border: "1px solid #adadadff",
        borderRadius: "8px",
        padding: "8px",
        gap: "5px",
        ...styles,
      }}
    >
      <Image
        src={option?.image || ""}
        styles={{
          width: "100%",
          height: "120px",
          objectFit: "contain",
          mixBlendMode: "multiply",
        }}
      />
      <Typography styles={{ fontSize: "14px", fontWeight: 600 }}>
        {option.name}
      </Typography>
      <CurrencyBlock
        value={{
          value: option.price,
        }}
        oldValue={{
          value: option.originalPrice,
          position: "vertical",
        }}
        currency={currency}
      />
    </div>
  );
};
