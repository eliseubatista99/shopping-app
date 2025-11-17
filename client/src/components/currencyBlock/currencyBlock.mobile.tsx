import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { CurrencyBlockProps } from "./currencyBlock";
import { useCurrencyBlockHelper } from "./currencyBlock.hook";

export const CurrencyBlockMobile: React.FC<CurrencyBlockProps> = (props) => {
  const { styles, currency } = props;
  const { units, decimals } = useCurrencyBlockHelper(props);

  return (
    <div
      data-testid="currency-block"
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "1px",
        ...styles,
      }}
    >
      <Typography styles={{ fontSize: "20px", fontWeight: 500 }}>
        {units}
      </Typography>
      <div style={{ flexDirection: "row", padding: "1px 0 0 0", gap: "3px" }}>
        <Typography styles={{ fontSize: "12px", fontWeight: 300 }}>
          {decimals}
        </Typography>
        {currency && (
          <Typography styles={{ fontSize: "12px", fontWeight: 300 }}>
            {currency}
          </Typography>
        )}
      </div>
    </div>
  );
};
