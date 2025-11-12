import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import type { AppDrawerProps } from "./appDrawer";

export const useAppDrawerHelper = ({ id }: AppDrawerProps) => {
  const { isItemVisible } = useFeedback();

  return {
    isVisible: isItemVisible(id),
  };
};
