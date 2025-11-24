import { AppLayout, AppLoader } from "@components";
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
      {!loading && <></>}
    </AppLayout>
  );
};
