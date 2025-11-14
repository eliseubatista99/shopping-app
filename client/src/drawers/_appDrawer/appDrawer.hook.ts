import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppDrawerProps } from "./appDrawer";

export const useAppDrawerHelper = ({ id, canBeClosed }: AppDrawerProps) => {
  const { isItemVisible, hideItem } = useFeedback();

  const onClickBackground = React.useCallback(() => {
    if (canBeClosed) {
      hideItem(id);
    }
  }, [canBeClosed, hideItem, id]);

  return {
    isVisible: isItemVisible(id),
    onClickBackground,
  };
};
