import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { CurrencyBlockProps } from "./currencyBlock";
import { useCurrencyBlockHelper } from "./currencyBlock.hook";

export const CurrencyBlockMobile: React.FC<CurrencyBlockProps> = (props) => {
  const { styles, currency, oldValue } = props;
  const { value, hasOldValue } = useCurrencyBlockHelper(props);

  const valueBlock = React.useMemo(
    () => (
      <div
        data-testid="value-block"
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "1px",
          ...value.containerStyles,
        }}
      >
        <Typography
          styles={{
            fontSize: "20px",
            fontWeight: 500,
            ...value.unitsTextStyles,
          }}
        >
          {value.units}
        </Typography>

        <div style={{ flexDirection: "row", padding: "1px 0 0 0", gap: "3px" }}>
          <Typography
            styles={{
              fontSize: "12px",
              fontWeight: 300,
              ...value.decimalsTextStyles,
            }}
          >
            {value.decimals}
          </Typography>
          {currency && (
            <Typography
              styles={{
                fontSize: "12px",
                fontWeight: 300,
                ...value.decimalsTextStyles,
                ...value.currencyTextStyles,
              }}
            >
              {currency}
            </Typography>
          )}
        </div>
      </div>
    ),
    [currency, value]
  );

  const oldValueBlock = React.useMemo(
    () => (
      <div
        data-testid="old-value-block"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            height: "1px",
            width: "100%",
            background: "#858585ff",
            margin: "auto",
          }}
        />
        <Typography
          styles={{
            fontSize: "13px",
            fontWeight: 300,
            color: "#696969ff",
            ...oldValue?.textStyles,
          }}
        >
          {`${oldValue?.value?.toFixed(2)} ${currency || ""}`}
        </Typography>
      </div>
    ),
    [currency, oldValue]
  );

  return (
    <div
      data-testid="currency-block"
      style={{
        flexDirection: oldValue?.position === "vertical" ? "column" : "row",
        gap: "3px",
        ...styles,
      }}
    >
      {valueBlock}
      {hasOldValue && oldValueBlock}
    </div>
  );
};
