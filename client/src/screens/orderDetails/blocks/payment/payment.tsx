import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { PaymentBlockDesktop } from "./payment.desktop";
import { PaymentBlockMobile } from "./payment.mobile";

export const PaymentBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <PaymentBlockMobile />}
      {currentSize === "desktop" && <PaymentBlockDesktop />}
    </>
  );
};
