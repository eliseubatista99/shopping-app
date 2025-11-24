import { usePaymentBlockHelper } from "./payment.hook";

export const PaymentBlockMobile: React.FC = () => {
  const { i18n } = usePaymentBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
