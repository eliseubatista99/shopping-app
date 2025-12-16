import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ConditionOffersBlockDesktop } from "./conditionOffers.desktop";
import { ConditionOffersBlockMobile } from "./conditionOffers.mobile";

export const ConditionOffersBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ConditionOffersBlockMobile />}
      {currentSize === "desktop" && <ConditionOffersBlockDesktop />}
    </>
  );
};
