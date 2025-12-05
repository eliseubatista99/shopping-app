import { AppLayout, AppLoader, AuthenticatedScreen } from "@components";
import { PAGES } from "@constants";
import {
  AddressBlock,
  ExecutionBlock,
  PaymentBlock,
  ProductsBlock,
  ScheduleBlock,
} from "./blocks";
import { useCheckoutPageHelper } from "./checkout.hook";

export const CheckoutMobile: React.FC = () => {
  const { loading } = useCheckoutPageHelper();

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
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      <AuthenticatedScreen returnPage={PAGES.CHECKOUT}>
        {loading && <AppLoader visible={loading} />}
        {!loading && (
          <>
            <AddressBlock />
            <ScheduleBlock />
            <PaymentBlock />
            <ProductsBlock />
            <ExecutionBlock />
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
