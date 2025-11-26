import { AppLoader, IsOnScreenTrigger, OrderListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useOrdersListBlockHelper } from "./ordersList.hook";

export const OrdersListBlockMobile: React.FC = () => {
  const { i18n, orders, loading, handleRequestTrigger } =
    useOrdersListBlockHelper();

  const ordersJSX = orders.map((o) => <OrderListItem key={o.id} order={o} />);

  return (
    <>
      <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      {ordersJSX.length > 0 && (
        <div
          style={{
            width: "100%",
            gap: "8px",
          }}
        >
          {ordersJSX}
        </div>
      )}
      {loading && <AppLoader visible={loading} />}
      <IsOnScreenTrigger
        onVisibilityChanged={(visible) => handleRequestTrigger(visible)}
      />
    </>
  );
};
