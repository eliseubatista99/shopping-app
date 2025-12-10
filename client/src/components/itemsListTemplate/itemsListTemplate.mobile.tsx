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
            Something went wrong, please try again!
          </Typography>
          <AppButton
            text={{
              content: "Try again",
              props: {
                styles: {
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 400,
                },
              },
            }}
            onClick={() => handleRequestTrigger(true)}
            styles={{
              width: "80%",
            }}
          />
        </div>
      )}

      {loading && (
        <AppLoader visible={loading} styles={{ margin: "20px auto" }} />
      )}

      {!hasError && !loading && (
        <IsOnScreenTrigger
          onVisibilityChanged={(visible) => handleRequestTrigger(visible)}
        />
      )}
    </>
  );
};
