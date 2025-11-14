import type { AppDrawerProps } from "./appDrawer";
import { useAppDrawerHelper } from "./appDrawer.hook";

export const AppDrawerMobile = (props: AppDrawerProps) => {
  const { isVisible, onClickBackground } = useAppDrawerHelper(props);
  const { drawerStyles } = props;
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
            zIndex: 101,
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
              minHeight: "150px",
              padding: "20px",
              ...drawerStyles,
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};
