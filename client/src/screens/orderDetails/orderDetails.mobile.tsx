import {
  AppLayout,
  AppLoader,
  AuthenticatedScreen,
  Separator,
} from "@components";
import { PAGES } from "@constants";
import {
  AddressBlock,
  DetailsBlock,
  PaymentBlock,
  ProductBlock,
  SummaryBlock,
} from "./blocks";
import { useOrderDetailsPageHelper } from "./orderDetails.hook";

export const OrderDetailsMobile: React.FC = () => {
  const { loading, selectedOrder } = useOrderDetailsPageHelper();

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
      <AuthenticatedScreen returnPage={PAGES.ORDER_DETAILS}>
        {loading && <AppLoader visible={loading} />}
        {!loading && selectedOrder && (
          <>
            <DetailsBlock />
            <Separator />
            <ProductBlock />
            <Separator />
            <PaymentBlock />
            <AddressBlock />
            <SummaryBlock />
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
