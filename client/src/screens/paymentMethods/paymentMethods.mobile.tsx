import { AppLayout, AppLoader } from "@components";
import { usePaymentMethodsPageHelper } from "./paymentMethods.hook";

export const PaymentMethodsMobile: React.FC = () => {
  const { loading } = usePaymentMethodsPageHelper();

  return (
    <AppLayout
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#ffffff",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#292361ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && <></>}
    </AppLayout>
  );
};
