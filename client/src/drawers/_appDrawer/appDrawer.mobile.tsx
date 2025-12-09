import { zIndexes } from "@constants";
import type { AppDrawerProps } from "./appDrawer";
import { useAppDrawerHelper } from "./appDrawer.hook";

export const AppDrawerMobile = (props: AppDrawerProps) => {
  const { isVisible, onClickBackground } = useAppDrawerHelper(props);
  const { topContent, drawerStyles } = props;
  return (
    <>
      {isVisible && (
        <div
          onClick={() => onClickBackground()}
          style={{
            position: "fixed",
            overflow: "hidden",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: zIndexes.drawer,
            background: "#00000049",
          }}
        >
          <div
            style={{
              width: "100%",
              bottom: "0",
              left: "0",
              position: "absolute",
              background: "#ffffff",
              maxHeight: "80%",
              overflow: "hidden",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {topContent && (
              <div
                style={{
                  width: "100%",
                  minHeight: "fit-content",
                }}
              >
                {topContent}
              </div>
            )}
            <div
              style={{
                width: "100%",
                minHeight: "150px",
                overflowX: "hidden",
                overflowY: "auto",
                padding: "20px",
                ...drawerStyles,
              }}
            >
              <div
                style={{
                  width: "100%",
                  minHeight: "fit-content",
                }}
              >
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
