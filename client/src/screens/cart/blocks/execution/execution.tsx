import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ExecutionBlockDesktop } from "./execution.desktop";
import { ExecutionBlockMobile } from "./execution.mobile";

export const ExecutionBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ExecutionBlockMobile />}
      {currentSize === "desktop" && <ExecutionBlockDesktop />}
    </>
  );
};
