import type { AppInputFieldProps } from "./appInputField";
import { AppInputFieldMobile } from "./appInputField.mobile";

export const AppInputFieldDesktop: React.FC<AppInputFieldProps> = (props) => {
  return <AppInputFieldMobile {...props} />;
};
