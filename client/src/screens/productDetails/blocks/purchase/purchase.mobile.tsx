import { CurrencyBlock } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { usePurchaseBlockHelper } from "./purchase.hook";

export const PurchaseBlockMobile: React.FC = () => {
  const { i18n, product, calculatedPrices, currency } =
    usePurchaseBlockHelper();

  return (
    <>
      {product && (
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            border: "1px solid #9e9e9eff",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <div
            style={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
          >
            {calculatedPrices.discount && (
              <Typography
                styles={{
                  fontSize: "26px",
                  fontWeight: 300,
                  color: "#d80000ff",
                }}
              >{`-${calculatedPrices.discount}%`}</Typography>
            )}
            <CurrencyBlock
              value={{
                value: calculatedPrices.price,
                unitsTextStyles: {
                  fontSize: "40px",
                  fontWeight: 500,
                },
                decimalsTextStyles: {
                  fontSize: "20px",
                  fontWeight: 500,
                },
              }}
              currency={currency}
            />
          </div>
          {calculatedPrices.originalPrice && (
            <div
              style={{
                width: "100%",
                flexDirection: "row",
                gap: "3px",
                marginTop: "5px",
                color: "#3f3f3fff",
              }}
            >
              <Typography>{i18n.pricing.originalPrice}</Typography>
              <Typography
                styles={{ textDecoration: "line-through" }}
              >{`${calculatedPrices.originalPrice}${currency}`}</Typography>
            </div>
          )}
          <Typography styles={{ marginTop: "12px" }}>
            {i18n.pricing.vat}
          </Typography>

          <Typography styles={{ marginTop: "12px" }}>
            {i18n.delivery.cost}
          </Typography>
          <Typography styles={{ marginTop: "12px" }}>
            {i18n.delivery.date}
          </Typography>
        </div>
      )}
    </>
  );
};
