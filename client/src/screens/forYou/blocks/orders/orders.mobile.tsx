import { useOrdersBlockHelper } from "./orders.hook";

export const OrdersBlockMobile: React.FC = () => {
  const { i18n } = useOrdersBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
