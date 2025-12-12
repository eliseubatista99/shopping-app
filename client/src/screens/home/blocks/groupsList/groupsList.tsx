import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { GroupsListBlockDesktop } from "./groupsList.desktop";
import { GroupsListBlockMobile } from "./groupsList.mobile";

export const GroupsListBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <GroupsListBlockMobile />}
      {currentSize === "desktop" && <GroupsListBlockDesktop />}
    </>
  );
};
