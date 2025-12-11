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

export const App = () => {
  return (
    <>
      <GenericApiErrorModal />

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
