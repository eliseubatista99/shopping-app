import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
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
          <div
            style={{
              width: "100%",
              border: "1px solid #bababaff",
              borderRadius: "10px",
              padding: "15px",
              marginTop: "15px",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Image src={paymentMethod.image} styles={{ width: "40px" }} />
            <Typography>{i18n.methodName}</Typography>
          </div>
        </>
      )}
    </div>
  );
};
