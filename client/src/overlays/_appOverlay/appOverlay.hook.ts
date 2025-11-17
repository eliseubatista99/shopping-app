import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import type { AppOverlayProps } from "./appOverlay";

export const useAppOverlayHelper = ({ id }: AppOverlayProps) => {
  const { isItemVisible } = useFeedback();
  return {
    isVisible: isItemVisible(id),
  };
};
