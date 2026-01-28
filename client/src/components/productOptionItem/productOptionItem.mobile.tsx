import { CurrencyBlock, ProductImage } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
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
      <ProductImage
        image={option?.image}
        styles={{
          width: "100%",
          height: "120px",
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
