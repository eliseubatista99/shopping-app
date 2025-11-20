import type { AppTextAreaProps } from "./appTextArea";
import { AppTextAreaMobile } from "./appTextArea.mobile";

export const AppTextAreaDesktop: React.FC<AppTextAreaProps> = (props) => {
  return <AppTextAreaMobile {...props} />;
};
