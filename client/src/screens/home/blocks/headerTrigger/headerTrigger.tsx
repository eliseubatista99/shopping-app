import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { HeaderTriggerBlockDesktop } from "./headerTrigger.desktop";
import { HeaderTriggerBlockMobile } from "./headerTrigger.mobile";

export interface HeaderTriggerBlockProps {
  onTrigger: (visible: boolean) => void;
}

export const HeaderTriggerBlock: React.FC<HeaderTriggerBlockProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <HeaderTriggerBlockMobile {...props} />}
      {currentSize === "desktop" && <HeaderTriggerBlockDesktop {...props} />}
    </>
  );
};
