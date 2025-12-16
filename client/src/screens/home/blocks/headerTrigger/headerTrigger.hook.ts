import { useOnScreen } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { HeaderTriggerBlockProps } from "./headerTrigger";

export const useHeaderTriggerBlockHelper = ({
  onTrigger,
}: HeaderTriggerBlockProps) => {
  const isInitialized = React.useRef<boolean>(false);
  const isVisibleCache = React.useRef<boolean>(false);

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(triggerRef);

  const handleVisibilityChanged = React.useCallback(
    (visible: boolean) => {
      onTrigger(visible);
    },
    [onTrigger]
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
