import { Separator } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { usePaymentBlockHelper } from "./payment.hook";

export const PaymentBlockMobile: React.FC = () => {
  const {
    i18n,
    selectedPaymentMethod,
    currency,
    productCost,
    shippingCost,
    totalCost,
    onClickChangePayment,
    wantsFastestOption,
    fastestDeliveryCost,
  } = usePaymentBlockHelper();

  const costRow = (text: string, cost: string, bold?: boolean) => (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        styles={{
          fontSize: bold ? "20px" : "16px",
          fontWeight: bold ? 600 : 300,
        }}
      >
        {text}
      </Typography>
      <Typography
        styles={{
          fontSize: bold ? "20px" : "16px",
          fontWeight: bold ? 600 : 300,
        }}
      >
        {cost}
      </Typography>
    </div>
  );

  return (
    <>
      {selectedPaymentMethod && (
        <div style={{ width: "100%", gap: "10px", marginTop: "20px" }}>
          <Separator />
          <Typography
            styles={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {i18n.methodName}
          </Typography>
          <div
            onClick={() => onClickChangePayment()}
            style={{ cursor: "pointer", color: "#023492" }}
          >
            <Typography>{i18n.changeMethod}</Typography>
          </div>
        </div>
      )}
      <Separator styles={{ marginTop: "20px" }} />
      <div style={{ width: "100%", gap: "6px", marginTop: "10px" }}>
        {costRow(i18n.products, `${productCost}${currency}`)}
        {costRow(i18n.shipping, `${shippingCost}${currency}`)}
        {wantsFastestOption &&
          costRow(i18n.fastShipping, `${fastestDeliveryCost}${currency}`)}
        {costRow(i18n.final, `${totalCost}${currency}`, true)}
      </div>
    </>
  );
};
