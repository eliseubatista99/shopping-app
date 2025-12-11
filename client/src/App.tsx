import { AppLoader } from "@components";
import {
  AddAddressDrawer,
  AddCardPaymentMethodDrawer,
  EditAddressDrawer,
  EditCardPaymentMethodDrawer,
  OrderFiltersDrawer,
  ReviewFiltersDrawer,
  SelectAddressDrawer,
} from "@drawers";
import { GenericApiErrorModal } from "@modals";
import { OverlayLoader, OverlaySearch } from "@overlays";
import { ClientInfoChangedToast, ReviewSubmittedToast } from "@toasts";
import { useAppHelper } from "./App.hook";
import { TryAgainClientInfoModal } from "./modals/tryAgainClientInfo/tryAgainClientInfo";

export const App = () => {
  const { isLoading } = useAppHelper();

  return (
    <>
      <AppLoader
        visible={isLoading}
        styles={{
          zIndex: 1,
          background: "#ffffff",
          position: "absolute",
          margin: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <GenericApiErrorModal />
      <TryAgainClientInfoModal />

      <SelectAddressDrawer />
      <AddAddressDrawer />
      <EditAddressDrawer />
      <ReviewFiltersDrawer />
      <OrderFiltersDrawer />
      <AddCardPaymentMethodDrawer />
      <EditCardPaymentMethodDrawer />

      <OverlayLoader />
      <OverlaySearch />

      <ReviewSubmittedToast />
      <ClientInfoChangedToast />
    </>
  );
};
