import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { NotFound404Desktop } from "./notFound404.desktop";
import { NotFound404Mobile } from "./notFound404.mobile";

export const NotFound404: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <NotFound404Mobile />}
      {currentSize === "desktop" && <NotFound404Desktop />}
    </>
  );
};
