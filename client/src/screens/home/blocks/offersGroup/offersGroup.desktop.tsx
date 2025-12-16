import type { OffersGroupBlockProps } from "./offersGroup";
import { OffersGroupBlockMobile } from "./offersGroup.mobile";

export const OffersGroupBlockDesktop: React.FC<OffersGroupBlockProps> = (
  props
) => {
  return <OffersGroupBlockMobile {...props} />;
};
