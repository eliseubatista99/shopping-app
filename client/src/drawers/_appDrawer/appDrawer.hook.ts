import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppDrawerProps } from "./appDrawer";

export const useAppDrawerHelper = ({
  id,
  canBeClosed,
  onClose,
}: AppDrawerProps) => {
  const { isItemVisible, hideItem } = useFeedback();

  const onClickBackground = React.useCallback(() => {
    if (canBeClosed) {
      hideItem(id);
      onClose?.();
    }
  }, [canBeClosed, hideItem, id, onClose]);

  return {
    isVisible: isItemVisible(id),
    onClickBackground,
  };
};
