import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { IsOnScreenTriggerDesktop } from "./isOnScreenTrigger.desktop";
import { IsOnScreenTriggerMobile } from "./isOnScreenTrigger.mobile";

export interface IsOnScreenTriggerProps {
  onVisibilityChanged: (visible: boolean) => void;
  styles?: React.CSSProperties;
}

export const IsOnScreenTrigger: React.FC<IsOnScreenTriggerProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <IsOnScreenTriggerMobile {...props} />}
      {currentSize === "desktop" && <IsOnScreenTriggerDesktop {...props} />}
    </>
  );
};
