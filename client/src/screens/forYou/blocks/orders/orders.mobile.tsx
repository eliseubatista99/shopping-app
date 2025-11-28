import {
  Carousel,
  Image,
  Typography,
} from "@eliseubatista99/react-scaffold-core";
import { useOrdersBlockHelper } from "./orders.hook";

export const OrdersBlockMobile: React.FC = () => {
  const { i18n, onClickSeeAll, orders, onClickOrder } = useOrdersBlockHelper();

  const ordersSlides = orders.map((o) => ({
    content: (
      <div
        style={{
          width: "150px",
          borderRadius: "20px",
          border: "1px solid #a2a2a2ff",
          padding: "10px",
        }}
      >
        <Image
          key={o.id}
          src={o.product.image || ""}
          onClick={() => onClickOrder(o)}
          styles={{
            objectFit: "contain",
            mixBlendMode: "multiply",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
  }));

  return (
    <>
      {orders.length > 0 && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
              {i18n.title}
            </Typography>
            <div onClick={() => onClickSeeAll()} style={{ color: "#000ac1ff" }}>
              <Typography>{i18n.seeAll}</Typography>
            </div>
          </div>
          <Carousel content={ordersSlides} styles={{ marginTop: "20px" }} />
        </div>
      )}
    </>
  );
};
