import { PaymentMethodListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { usePaymentBlockHelper } from "./payment.hook";

export const PaymentBlockMobile: React.FC = () => {
  const { i18n, paymentMethod } = usePaymentBlockHelper();

  return (
    <div style={{ width: "100%", padding: "10px 20px" }}>
      {paymentMethod && (
        <>
          <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
            {i18n.title}
          </Typography>{" "}
          <PaymentMethodListItem
            paymentMethod={paymentMethod}
            imageSize={40}
            customText={i18n.methodName}
            styles={{
              marginTop: "15px",
            }}
          />
        </>
      )}
    </div>
  );
};
