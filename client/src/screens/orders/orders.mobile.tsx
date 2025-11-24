import { AppLayout, AppLoader } from "@components";
import { useOrdersPageHelper } from "./orders.hook";

export const OrdersMobile: React.FC = () => {
  const { loading } = useOrdersPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
        },
        searchBar: {
          visible: true,
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && <></>}
    </AppLayout>
  );
};
