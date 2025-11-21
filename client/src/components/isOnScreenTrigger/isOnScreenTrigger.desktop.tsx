import React from "react";
import type { IsOnScreenTriggerProps } from "./isOnScreenTrigger";
import { IsOnScreenTriggerMobile } from "./isOnScreenTrigger.mobile";

export const IsOnScreenTriggerDesktop: React.FC<IsOnScreenTriggerProps> = (props) => {
  return <IsOnScreenTriggerMobile {...props} />;
};
