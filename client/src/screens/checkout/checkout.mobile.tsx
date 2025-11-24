import { AppLayout, AppLoader } from "@components";
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
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <PaymentBlock />
          <AddressBlock />
          <ScheduleBlock />
          <ProductsBlock />
          <ExecutionBlock />
        </>
      )}
    </AppLayout>
  );
};
