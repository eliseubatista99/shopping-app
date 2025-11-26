import { useOrdersListBlockHelper } from "./ordersList.hook";

export const OrdersListBlockMobile: React.FC = () => {
  const { i18n } = useOrdersListBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
