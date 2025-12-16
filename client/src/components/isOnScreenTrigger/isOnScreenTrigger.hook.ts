import { useOnScreen } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { IsOnScreenTriggerProps } from "./isOnScreenTrigger";

export const useIsOnScreenTriggerHelper = ({
  onVisibilityChanged,
}: IsOnScreenTriggerProps) => {
  const isInitialized = React.useRef<boolean>(false);
  const isVisibleCache = React.useRef<boolean>(false);

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(triggerRef);

  const handleVisibilityChanged = React.useCallback(
    (visible: boolean) => {
      onVisibilityChanged(visible);
    },
    [onVisibilityChanged]
  );

  React.useEffect(() => {
    if (!isInitialized.current && !isOnScreen) {
      return;
    }

    isInitialized.current = true;

    if (isVisibleCache.current !== isOnScreen) {
      isVisibleCache.current = isOnScreen;
      handleVisibilityChanged(isOnScreen);
    }
  }, [handleVisibilityChanged, isOnScreen]);

  return {
    triggerRef,
  };
};
