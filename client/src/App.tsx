import { SelectAddressDrawer } from "@drawers";
import { OverlaySearch } from "@overlays";
import { useAppHelper } from "./App.hook";

export const App = () => {
  useAppHelper();

  return (
    <>
      <SelectAddressDrawer />
      <OverlaySearch />
    </>
  );
};

export default App;
