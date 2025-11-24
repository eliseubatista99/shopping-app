import { Separator } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useScheduleBlockHelper } from "./schedule.hook";

export const ScheduleBlockMobile: React.FC = () => {
  const { i18n, wantsFastestOption, onClickOption } = useScheduleBlockHelper();

  return (
    <>
      <Separator />
      <Typography
        styles={{
          fontSize: "20px",
          fontWeight: 600,
          marginTop: "10px",
        }}
      >
        {i18n.estimate}
      </Typography>
    </>
  );
};
