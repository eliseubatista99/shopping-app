import React from "react";
import type { TagProps } from "./tag";
import { TagMobile } from "./tag.mobile";

export const TagDesktop: React.FC<TagProps> = (props) => {
  return <TagMobile {...props} />;
};
