import { Assets } from "@assets";
import {
  AppButton,
  CurrencyBlock,
  QuantityField,
  Separator,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { usePurchaseBlockHelper } from "./purchase.hook";

export const PurchaseBlockMobile: React.FC = () => {
  const {
    i18n,
    isAuthenticated,
    product,
    calculatedPrices,
    currency,
    onClickAddress,
    quantity,
    onClickAddToCart,
    onClickBuyNow,
  } = usePurchaseBlockHelper();

  return (
    <>
      {product && (
        <>
          <div
            style={{
              width: "100%",
              flexDirection: "column",
              border: "1px solid #9e9e9eff",
              borderRadius: "10px",
              padding: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
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

            {isAuthenticated && (
              <div
                onClick={() => onClickAddress()}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  marginTop: "22px",
                  gap: "6px",
                  cursor: "pointer",
                }}
              >
                <Assets.Icons.Location width="16px" height="16px" />
                <Typography
                  styles={{
                    flex: 1,
                    color: "#001b74ff",
                  }}
                >
                  {i18n.delivery.address}
                </Typography>
              </div>
            )}

            <QuantityField
              currentQuantity={quantity.current}
              minQuantity={0}
              maxQuantity={99}
              onChange={quantity.onChange}
              styles={{ marginTop: "20px" }}
            />

            <AppButton
              text={{
                content: i18n.actions.addToCard,
                props: {
                  styles: {
                    fontSize: "18px",
                  },
                },
              }}
              styles={{ width: "100%", marginTop: "20px", padding: "20px" }}
              onClick={() => onClickAddToCart(product)}
            />

            <AppButton
              text={{
                content: i18n.actions.buyNow,
                props: {
                  styles: {
                    fontSize: "18px",
                  },
                },
              }}
              styles={{
                width: "100%",
                marginTop: "20px",
                background: "#e99619ff",
                padding: "20px",
              }}
              onClick={onClickBuyNow}
            />
          </div>
          <Separator styles={{ marginTop: "20px" }} />
        </>
      )}
    </>
  );
};
