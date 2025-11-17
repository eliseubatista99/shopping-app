import { zIndexes } from "@constants";
import type { AppOverlayProps } from "./appOverlay";
import { useAppOverlayHelper } from "./appOverlay.hook";

export const AppOverlayMobile: React.FC<AppOverlayProps> = (props) => {
  const { isVisible } = useAppOverlayHelper(props);
  const { children, styles } = props;

  return (
    <>
      {isVisible && (
        <div
          data-testid="app-overlay"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "#00000049",
            zIndex: zIndexes.overlay,
            ...styles,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};
