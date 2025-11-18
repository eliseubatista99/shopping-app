import { Assets } from "@assets";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { Separator } from "../separator";
import type { ProductsCombinationOverviewProps } from "./productsCombinationOverview";
import { useProductsCombinationOverviewHelper } from "./productsCombinationOverview.hook";

export const ProductsCombinationOverviewMobile: React.FC<
  ProductsCombinationOverviewProps
> = (props) => {
  const { onClickExpand, onClickProduct } = props;

  const { i18n, items, combinationCost, currency } =
    useProductsCombinationOverviewHelper(props);

  const itemsJSX = items.map((item, index) => (
    <div style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>
      {index !== 0 && <Typography>+</Typography>}
      <Image
        src={item.image}
        styles={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          mixBlendMode: "multiply",
        }}
        onClick={() => onClickProduct?.(item)}
      />
    </div>
  ));

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        border: "1px solid #a0a0a0ff",
        borderRadius: "18px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {itemsJSX}
      </div>
      <Separator />
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div
          style={{
            flex: 1,
            gap: "5px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography styles={{ fontSize: "20px", fontWeight: 500 }}>
            {i18n.collapsed.totalCost}
          </Typography>
          <Typography
            styles={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#8a0000ff",
            }}
          >{`${combinationCost.toFixed(2)}${currency}`}</Typography>
        </div>
        {onClickExpand && (
          <Image
            src={Assets.Icons.NavDown}
            styles={{
              width: "15px",
              height: "15px",
            }}
            onClick={() => onClickExpand()}
          />
        )}
      </div>
    </div>
  );
};
