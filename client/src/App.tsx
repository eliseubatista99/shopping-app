import {
  OrderFiltersDrawer,
  ReviewFiltersDrawer,
  SelectAddressDrawer,
} from "@drawers";
import { OverlaySearch } from "@overlays";
import { ReviewSubmittedToast } from "@toasts";

export const App = () => {
  return (
    <>
      <SelectAddressDrawer />
      <ReviewFiltersDrawer />
      <OrderFiltersDrawer />
      <OverlaySearch />
      <ReviewSubmittedToast />
    </>
  );
};
