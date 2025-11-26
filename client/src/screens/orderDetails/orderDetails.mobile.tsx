import { AppLayout, AppLoader } from "@components";
import {
  AddressBlock,
  DetailsBlock,
  PaymentBlock,
  ProductBlock,
  SummaryBlock,
} from "./blocks";
import { useOrderDetailsPageHelper } from "./orderDetails.hook";

export const OrderDetailsMobile: React.FC = () => {
  const { loading } = useOrderDetailsPageHelper();

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
          <DetailsBlock />
          <ProductBlock />
          <PaymentBlock />
          <AddressBlock />
          <SummaryBlock />
        </>
      )}
    </AppLayout>
  );
};
