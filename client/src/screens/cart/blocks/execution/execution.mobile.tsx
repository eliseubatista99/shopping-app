import { AppButton, CurrencyBlock, Separator } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useExecutionBlockHelper } from "./execution.hook";

export const ExecutionBlockMobile: React.FC = () => {
  const { i18n, productsCosts, currency, onClickBuyNow, products } =
    useExecutionBlockHelper();

  return (
    <>
      {products.length > 0 && (
        <>
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <Typography styles={{ fontSize: "20px" }}>
              {i18n.subtotal}
            </Typography>
            <CurrencyBlock
              value={{
                value: productsCosts.total,
                unitsTextStyles: {
                  fontSize: "24px",
                },
              }}
              oldValue={{
                value: productsCosts.totalOriginal,
                textStyles: {
                  fontSize: "16px",
                },
              }}
              currency={currency}
            />
          </div>
          <AppButton
            text={{
              content: i18n.buy,
            }}
            onClick={() => onClickBuyNow()}
            styles={{ marginTop: "15px" }}
          />
          <Separator styles={{ marginBlock: "15px" }} />
        </>
      )}
    </>
  );
};
