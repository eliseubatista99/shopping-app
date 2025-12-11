import { Modal } from "@eliseubatista99/react-scaffold-core";
import type { AppModalProps } from "./appModal";

export const AppModalMobile = ({ styles, ...props }: AppModalProps) => {
  return (
    <Modal
      {...props}
      contentStyles={{ gap: "20px", padding: "30px", ...styles }}
    />
  );
};
