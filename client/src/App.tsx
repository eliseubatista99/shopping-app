import {
  AddAddressDrawer,
  AddCardPaymentMethodDrawer,
  EditAddressDrawer,
  EditCardPaymentMethodDrawer,
  OrderFiltersDrawer,
  ReviewFiltersDrawer,
  SelectAddressDrawer,
} from "@drawers";
import { OverlaySearch } from "@overlays";
import { ClientInfoChangedToast, ReviewSubmittedToast } from "@toasts";

export const App = () => {
  return (
    <>
      <SelectAddressDrawer />
      <AddAddressDrawer />
      <EditAddressDrawer />
      <ReviewFiltersDrawer />
      <OrderFiltersDrawer />
      <AddCardPaymentMethodDrawer />
      <EditCardPaymentMethodDrawer />

      <OverlaySearch />

      <ReviewSubmittedToast />
      <ClientInfoChangedToast />
    </>
  );
};
