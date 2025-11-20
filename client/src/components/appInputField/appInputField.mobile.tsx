import { InputField } from "@eliseubatista99/react-scaffold-core";
import type { AppInputFieldProps } from "./appInputField";

export const AppInputFieldMobile: React.FC<AppInputFieldProps> = (props) => {
  return (
    <InputField
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
