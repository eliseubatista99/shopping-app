import type { HeaderTriggerBlockProps } from "./headerTrigger";
import { HeaderTriggerBlockMobile } from "./headerTrigger.mobile";

export const HeaderTriggerBlockDesktop: React.FC<HeaderTriggerBlockProps> = (
  props
) => {
  return <HeaderTriggerBlockMobile {...props} />;
};
