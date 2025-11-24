import { useScheduleBlockHelper } from "./schedule.hook";

export const ScheduleBlockMobile: React.FC = () => {
  const { i18n } = useScheduleBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
