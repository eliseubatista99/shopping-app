import { AppLayout, AppLoader } from "@components";
import { FiltersBlock, OrdersListBlock } from "./blocks";
import { useOrdersPageHelper } from "./orders.hook";

export const OrdersMobile: React.FC = () => {
  const { loading } = useOrdersPageHelper();

  return (
    <AppLayout
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
      pageStyles={{ padding: 0 }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <FiltersBlock />
          <div
            style={{
              width: "100%",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            {<OrdersListBlock />}
          </div>
        </>
      )}
    </AppLayout>
  );
};
