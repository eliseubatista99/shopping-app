import { Toast } from "@eliseubatista99/react-scaffold-core";
import type { AppToastProps } from "./appToast";

export const AppToastMobile: React.FC<AppToastProps> = ({
  children,
  ...props
}) => {
  return (
    <Toast
      {...props}
      styles={{
        width: "fit-content",
        padding: "10px 20px",
        top: "80px",
        height: "none",
        minHeight: "42px",
        border: "none",
        flexDirection: "row",
        borderRadius: "1000px",
        gap: "10px",
        ...props.styles,
      }}
    >
      {children}
    </Toast>
  );
};
