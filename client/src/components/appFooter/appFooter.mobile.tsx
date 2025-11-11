import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { useAppFooterHelper } from "./appFooter.hook";

export const AppFooterMobile: React.FC = () => {
  const { items, onClickItem } = useAppFooterHelper();

  const itemsJSX = items.map((i) => (
    <div
      style={{
        width: "30px",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 10px 10px 10px",
        position: "relative",
      }}
    >
      {i.selected && (
        <div
          style={{
            background: "#000000",
            top: 0,
            height: "3px",
            width: "100%",
            borderRadius: "0 0 30px 30px",
            position: "absolute",
          }}
        />
      )}
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <Image
          onClick={() => onClickItem(i)}
          src={i.icon}
          styles={{
            width: "20px",
            height: "20px",
          }}
        />
        {i.text && (
          <Typography
            styles={{
              fontWeight: "600",
              fontSize: "14px",
              position: "absolute",
              padding: "0 0 15px 3px",
            }}
          >
            {i.text}
          </Typography>
        )}
      </div>
    </div>
  ));

  return (
    <div
      data-testid="app-footer"
      style={{
        width: "100%",
        background: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #8a8a8a9a",
      }}
    >
      {itemsJSX}
    </div>
  );
};
