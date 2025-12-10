import type { OrderDto } from "@api";
import { ItemsListTemplate, OrderListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useOrdersListBlockHelper } from "./ordersList.hook";

export const OrdersListBlockMobile: React.FC = () => {
  const {
    i18n,
    orders,
    // loading,
    // handleRequestTrigger,
    onClickOrder,
    retrieveItems,
    storeFilters,
  } = useOrdersListBlockHelper();

  // const ordersJSX = orders.map((o) => (
  //   <OrderListItem key={o.id} order={o} onClick={() => onClickOrder(o)} />
  // ));

  const renderItem = (i: unknown) => {
    const item = i as OrderDto;

    return (
      <OrderListItem
        key={item.id}
        order={item}
        onClick={() => onClickOrder(item)}
      />
    );
  };

  return (
    <div style={{ width: "100%", flex: 1, padding: "12px" }}>
      <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>

      <ItemsListTemplate
        items={orders}
        renderItem={renderItem}
        retrieveItems={retrieveItems}
        filters={storeFilters}
      />

      {/* {ordersJSX.length > 0 && (
        <div
          style={{
            marginTop: "20px",
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
      /> */}
    </div>
  );
};
