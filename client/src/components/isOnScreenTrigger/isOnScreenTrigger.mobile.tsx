import React from "react";
import type { IsOnScreenTriggerProps } from "./isOnScreenTrigger";
import { useIsOnScreenTriggerHelper } from "./isOnScreenTrigger.hook";

export const IsOnScreenTriggerMobile: React.FC<IsOnScreenTriggerProps> = (
  props
) => {
  const { triggerRef } = useIsOnScreenTriggerHelper(props);
  const { styles } = props;

  return (
    <div
      ref={triggerRef}
      data-testid="is-on-screen-trigger"
      style={{
        position: "relative",
        width: "100%",
        height: "1px",
        ...styles,
      }}
    />
  );
};
