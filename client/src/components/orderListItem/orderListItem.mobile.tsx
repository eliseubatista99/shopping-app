import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { OrderListItemProps } from "./orderListItem";
import { useOrderListItemHelper } from "./orderListItem.hook";

export const OrderListItemMobile: React.FC<OrderListItemProps> = (props) => {
  const { i18n } = useOrderListItemHelper(props);
  const { styles, order, onClick } = props;

  return (
    <div
      data-testid="orderListItem"
      onClick={() => onClick?.()}
      style={{
        border: "1px solid #b8b8b8ff",
        borderRadius: "10px",
        flexDirection: "row",
        minHeight: "90px",
        ...styles,
      }}
    >
      <div style={{ width: "80px", background: "#ecececff" }}>
        <Image
          src={order.product.image || ""}
          styles={{
            aspectRatio: "1 / 1",
            objectFit: "contain",
            background: "none",
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: "13px 8px",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <Typography maxNumberOfLines={1} styles={{ fontWeight: 600 }}>
          {order.product.name}
        </Typography>
        <Typography
          maxNumberOfLines={3}
          styles={{ fontSize: "13px", color: "#5b5b5bff" }}
        >
          {i18n.status}
        </Typography>
      </div>
    </div>
  );
};
