import type { AppDrawerProps } from "./appDrawer";
import { useAppDrawerHelper } from "./appDrawer.hook";

export const AppDrawerMobile = (props: AppDrawerProps) => {
  const { isVisible } = useAppDrawerHelper(props);
  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            overflow: "hidden",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              bottom: "0",
              left: "0",
              position: "relative",
              background: "#ffffff",
              minHeight: "150px",
            }}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};
