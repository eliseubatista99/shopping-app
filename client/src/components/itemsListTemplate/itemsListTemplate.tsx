import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React, { type JSX } from "react";
import { ItemsListTemplateDesktop } from "./itemsListTemplate.desktop";
import { ItemsListTemplateMobile } from "./itemsListTemplate.mobile";

export interface ItemsListTemplateProps {
  items: unknown[];
  renderItem: (item: unknown) => JSX.Element;
  retrieveItems: (
    currentPage: number,
    pageSize: number,
    filters?: object
  ) => Promise<{ success: boolean; hasMorePages: boolean }>;
  filters?: object;
  styles?: React.CSSProperties;
}

export const ItemsListTemplate: React.FC<ItemsListTemplateProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ItemsListTemplateMobile {...props} />}
      {currentSize === "desktop" && <ItemsListTemplateDesktop {...props} />}
    </>
  );
};
