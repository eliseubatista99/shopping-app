import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { Assets } from "../../assets";
import type { SellerListItemProps } from "./sellerListItem";

export const SellerListItemMobile: React.FC<SellerListItemProps> = (props) => {
  const { seller, styles, onClick } = props;

  return (
    <div
      data-testid="seller-list-item"
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <div
        style={{
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          border: "1px solid #a3a3a3ff",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {seller.image && (
          <Image
            src={seller.image}
            styles={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {!seller.image && (
          <Assets.Icons.DefaultSeller width="80%" height="80%" />
        )}
      </div>

      <Typography styles={{ fontWeight: 600, fontSize: "16px" }}>
        {seller.name}
      </Typography>
    </div>
  );
};
