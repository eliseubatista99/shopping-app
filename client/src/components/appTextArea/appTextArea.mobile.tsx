import {
  TextAreaField,
  Typography,
} from "@eliseubatista99/react-scaffold-core";
import type { AppTextAreaProps } from "./appTextArea";

export const AppTextAreaMobile: React.FC<AppTextAreaProps> = (props) => {
  return (
    <TextAreaField
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
      containerStyles={{
        background: "#ffffff",
        border: "2px solid #747474b4",
        borderRadius: "12px",
        ...props.containerStyles,
      }}
    />
  );
};
