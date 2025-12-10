import React from "react";
import type { ItemsListTemplateProps } from "./itemsListTemplate";
import { ItemsListTemplateMobile } from "./itemsListTemplate.mobile";

export const ItemsListTemplateDesktop: React.FC<ItemsListTemplateProps> = (props) => {
  return <ItemsListTemplateMobile {...props} />;
};
