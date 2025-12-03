import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { PaymentMethodsDesktop } from "./paymentMethods.desktop";
import { PaymentMethodsMobile } from "./paymentMethods.mobile";

export const PaymentMethods: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <PaymentMethodsMobile />}
      {currentSize === "desktop" && <PaymentMethodsDesktop />}
    </>
  );
};
