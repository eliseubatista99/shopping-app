import {
  ItemsListTemplate,
  OrderListItem,
  type OrderAndProduct,
} from "@components";
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

  const renderItem = (i: unknown) => {
    const item = i as OrderAndProduct;

    return (
      <OrderListItem
        key={`${item.order.id}${item.product.id}`}
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
    </div>
  );
};
