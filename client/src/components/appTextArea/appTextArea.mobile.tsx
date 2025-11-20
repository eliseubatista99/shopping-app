import { TextAreaField } from "@eliseubatista99/react-scaffold-core";
import type { AppTextAreaProps } from "./appTextArea";

export const AppTextAreaMobile: React.FC<AppTextAreaProps> = (props) => {
  return (
    <TextAreaField
      {...props}
      containerStyles={{
        background: "#ffffff",
        border: "2px solid #747474b4",
        borderRadius: "12px",
        ...props.containerStyles,
      }}
    />
  );
};
