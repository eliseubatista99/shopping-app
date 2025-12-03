import { InputField, Typography } from "@eliseubatista99/react-scaffold-core";
import type { AppInputFieldProps } from "./appInputField";

export const AppInputFieldMobile: React.FC<AppInputFieldProps> = (props) => {
  return (
    <InputField
      {...props}
      label={
        props.label ? (
          <Typography styles={{ fontSize: "16px", fontWeight: 600 }}>
            {props.label}
          </Typography>
        ) : undefined
      }
      styles={{
        gap: "0px",
        ...props.styles,
      }}
      bottomMessage={
        props.bottomMessage ? (
          <Typography
            styles={{ fontSize: "16px", fontWeight: 600, color: "#de1616ff" }}
          >
            {props.bottomMessage}
          </Typography>
        ) : undefined
      }
      containerStyles={{
        background: "#ffffff",
        border: "2px solid #747474b4",
        borderRadius: "12px",
        ...props.containerStyles,
      }}
    />
  );
};
