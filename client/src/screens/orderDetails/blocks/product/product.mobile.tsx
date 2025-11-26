import { AppButton } from "@components";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const {
    i18n,
    selectedOrder,
    currency,
    onClickProduct,
    onClickBuyAgain,
    onClickWriteReview,
  } = useProductBlockHelper();

  return (
    <div style={{ width: "100%", padding: "10px 20px" }}>
      <div
        style={{
          width: "100%",
          border: "1px solid #cdcdcdff",
          borderRadius: "8px",
          padding: "15px",
          marginTop: "15px",
        }}
      >
        <Typography styles={{ fontWeight: 600, fontSize: "18px" }}>
          {i18n.statusDate}
        </Typography>
        <div
          onClick={() => onClickProduct()}
          style={{
            flexDirection: "row",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <Image
            src={selectedOrder?.product.image || ""}
            styles={{
              width: "70px",
              height: "70px",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              background: "none",
              mixBlendMode: "multiply",
            }}
          />
          <div style={{ flex: 1, gap: "5px" }}>
            <Typography maxNumberOfLines={2} styles={{ fontWeight: 600 }}>
              {selectedOrder?.product.name}
            </Typography>
            <div style={{ width: "100%", gap: "5px", flexDirection: "row" }}>
              <Typography styles={{ fontSize: "14px", color: "#3b3b3bff" }}>
                {i18n.soldBy}
              </Typography>
              <Typography styles={{ fontSize: "14px", color: "#1829c3ff" }}>
                {selectedOrder?.seller.name}
              </Typography>
            </div>
            <Typography
              styles={{ fontSize: "14px" }}
            >{`${selectedOrder?.totalCost}${currency}`}</Typography>
          </div>
        </div>

        <div
          onClick={() => {
            //
          }}
          style={{
            width: "100%",
            marginTop: "20px",
            gap: "5px",
          }}
        >
          <AppButton
            onClick={() => onClickBuyAgain()}
            text={{
              content: i18n.actions.buyAgain,
              props: {
                styles: {
                  fontSize: "14px",
                },
              },
            }}
            styles={{
              border: "1px solid #878787ff",
              background: "#ffffff",
              padding: "14px 20px",
              width: "fit-content",
            }}
          />
          <AppButton
            onClick={() => onClickWriteReview()}
            text={{
              content: i18n.actions.writeReview,
              props: {
                styles: {
                  fontSize: "14px",
                },
              },
            }}
            styles={{
              border: "1px solid #878787ff",
              background: "#ffffff",
              padding: "14px 20px",
              width: "fit-content",
            }}
          />
        </div>
      </div>
    </div>
  );
};
