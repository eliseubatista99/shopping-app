import {
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
      <ReviewFiltersDrawer />
      <OrderFiltersDrawer />
      <OverlaySearch />
      <ReviewSubmittedToast />
      <ClientInfoChangedToast />
    </>
  );
};
