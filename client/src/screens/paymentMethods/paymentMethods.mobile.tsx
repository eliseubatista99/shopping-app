import { AppLayout, AppLoader, AuthenticatedScreen } from "@components";
import { PAGES } from "@constants";
import { MethodsListBlock } from "./blocks";
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
      <AuthenticatedScreen returnPage={PAGES.PAYMENT_METHODS}>
        {loading && <AppLoader visible={loading} />}
        {!loading && (
          <>
            <MethodsListBlock />
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
