import { Carousel, Typography } from "@eliseubatista99/react-scaffold-core";
import { ProductImage } from "../../../../components";
import { useOrdersBlockHelper } from "./orders.hook";

export const OrdersBlockMobile: React.FC = () => {
  const { i18n, onClickSeeAll, orders, onClickOrder } = useOrdersBlockHelper();

  const ordersSlides = orders.map((o) => ({
    content: (
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "20px",
          border: "1px solid #a2a2a2ff",
          padding: "5px",
        }}
      >
        <ProductImage
          key={o.id}
          image={o.products?.[0]?.product?.image}
          styles={{
            borderRadius: "20px",
          }}
          onClick={() => onClickOrder(o)}
        />
        ,
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
