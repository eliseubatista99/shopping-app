import React from "react";
import { AppLoader } from "../appLoader";
import { IsOnScreenTrigger } from "../isOnScreenTrigger";
import type { ItemsListTemplateProps } from "./itemsListTemplate";
import { useItemsListTemplateHelper } from "./itemsListTemplate.hook";

export const ItemsListTemplateMobile: React.FC<ItemsListTemplateProps> = (
  props
) => {
  const { loading, handleRequestTrigger, hasError } =
    useItemsListTemplateHelper(props);
  const { items, renderItem } = props;

  const itemsJSX = items.map((i) => renderItem(i));

  return (
    <>
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
      {loading && <AppLoader visible={loading} />}

      {!hasError && (
        <IsOnScreenTrigger
          onVisibilityChanged={(visible) => handleRequestTrigger(visible)}
        />
      )}
    </>
  );
};
