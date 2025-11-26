import { AppLayout, AppLoader } from "@components";
import { FiltersBlock } from "./blocks";
import { useOrdersPageHelper } from "./orders.hook";

export const OrdersMobile: React.FC = () => {
  const { loading } = useOrdersPageHelper();

  return (
    <AppLayout
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
        </>
      )}
    </AppLayout>
  );
};
