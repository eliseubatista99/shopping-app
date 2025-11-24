import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ScheduleBlockDesktop } from "./schedule.desktop";
import { ScheduleBlockMobile } from "./schedule.mobile";

export const ScheduleBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ScheduleBlockMobile />}
      {currentSize === "desktop" && <ScheduleBlockDesktop />}
    </>
  );
};
