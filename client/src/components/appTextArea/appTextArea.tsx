import {
  useResponsive,
  type TextAreaFieldProps,
} from "@eliseubatista99/react-scaffold-core";
import { AppTextAreaDesktop } from "./appTextArea.desktop";
import { AppTextAreaMobile } from "./appTextArea.mobile";

export type AppTextAreaProps = Omit<TextAreaFieldProps, "label"> & {
  label?: string;
  styles?: React.CSSProperties;
};

export const AppTextArea: React.FC<AppTextAreaProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppTextAreaMobile {...props} />}
      {currentSize === "desktop" && <AppTextAreaDesktop {...props} />}
    </>
  );
};
