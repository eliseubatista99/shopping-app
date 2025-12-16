import { AppLoader } from "@components";
import { OVERLAYS } from "@constants";
import { AppOverlay } from "../_appOverlay";

export const OverlayLoaderMobile: React.FC = () => {
  return (
    <AppOverlay id={OVERLAYS.LOADER} styles={{ background: "#000000c2" }}>
      <AppLoader
        visible={true}
        loaderStyles={{ border: "8px solid #c6bef4ff" }}
      />
    </AppOverlay>
  );
};
