import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { AppLoader } from "../appLoader";
import { IsOnScreenTrigger } from "../isOnScreenTrigger";
import type { ItemsListTemplateProps } from "./itemsListTemplate";
import { useItemsListTemplateHelper } from "./itemsListTemplate.hook";

export const ItemsListTemplateMobile: React.FC<ItemsListTemplateProps> = (
  props
) => {
  const {
    i18n,
    items,
    loading,
    handleRequestTrigger,
    handleRequestItems,
    hasError,
  } = useItemsListTemplateHelper(props);
  const { renderItem, styles } = props;

  const itemsJSX = items.map((i) => renderItem(i));

  return (
    <div
      data-testid="item-list-template"
      style={{ width: "100%", flex: 1, ...styles }}
    >
      {items.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            gap: "8px",
          }}
        >
          {itemsJSX}
        </div>
      )}

      {!loading && hasError && (
        <div
          style={{
            width: "100%",
            padding: "40px 20px",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography
            styles={{ textAlign: "center", fontSize: "16px", fontWeight: 400 }}
          >
            {i18n.error.text}
          </Typography>
          <AppButton
            text={{
              content: i18n.error.actions.try,
              props: {
                styles: {
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 400,
                },
              },
            }}
            onClick={() => handleRequestItems()}
            styles={{
              width: "80%",
            }}
          />
        </div>
      )}

      {loading && (
        <AppLoader
          visible={loading}
          styles={{ padding: "20px", flex: 1, margin: "auto" }}
        />
      )}

      <IsOnScreenTrigger
        onVisibilityChanged={(visible) => handleRequestTrigger(visible)}
      />
    </div>
  );
};
