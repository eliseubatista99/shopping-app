import {
  useResponsive,
  type TypographyProps,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { TagDesktop } from "./tag.desktop";
import { TagMobile } from "./tag.mobile";

export interface TagProps {
  onClick?: () => void;
  text: string;
  textProps?: TypographyProps;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <TagMobile {...props} />}
      {currentSize === "desktop" && <TagDesktop {...props} />}
    </>
  );
};
