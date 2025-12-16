import {
  useResponsive,
  type InputFieldProps,
} from "@eliseubatista99/react-scaffold-core";
import { AppInputFieldDesktop } from "./appInputField.desktop";
import { AppInputFieldMobile } from "./appInputField.mobile";

export type AppInputFieldProps = Omit<
  InputFieldProps,
  "label" | "bottomMessage"
> & {
  label?: string;
  bottomMessage?: string;
  styles?: React.CSSProperties;
};

export const AppInputField: React.FC<AppInputFieldProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppInputFieldMobile {...props} />}
      {currentSize === "desktop" && <AppInputFieldDesktop {...props} />}
    </>
  );
};
