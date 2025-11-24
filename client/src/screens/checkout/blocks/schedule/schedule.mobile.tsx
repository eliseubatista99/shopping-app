import { Separator } from "@components";
import { RadioButton, Typography } from "@eliseubatista99/react-scaffold-core";
import { useScheduleBlockHelper } from "./schedule.hook";

export const ScheduleBlockMobile: React.FC = () => {
  const {
    i18n,
    currency,
    wantsFastestOption,
    onClickOption,
    fastestDeliveryCost,
  } = useScheduleBlockHelper();

  const scheduleOption = (text: string, cost: string, isFastest?: boolean) => {
    const isSelected =
      (isFastest && wantsFastestOption) || (!isFastest && !wantsFastestOption);

    return (
      <div style={{ width: "100%", flexDirection: "row", gap: "10px" }}>
        <RadioButton
          checked={isSelected}
          onClick={() => onClickOption(isFastest || false)}
        />
        <div style={{ flex: 1 }}>
          <Typography styles={{ fontSize: "16px", fontWeight: 600 }}>
            {text}
          </Typography>
          <Typography>{cost}</Typography>
        </div>
      </div>
    );
  };
  return (
    <>
      <Separator styles={{ marginTop: "20px" }} />
      <Typography
        styles={{
          fontSize: "20px",
          fontWeight: 600,
          marginTop: "10px",
        }}
      >
        {i18n.estimate}
      </Typography>
      <div
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "0px 5px",
          gap: "8px",
        }}
      >
        {scheduleOption(`${i18n.startDate} - ${i18n.endDate}`, i18n.noCosts)}
        {scheduleOption(
          i18n.startDate,
          `${fastestDeliveryCost} ${currency}`,
          true
        )}
      </div>
    </>
  );
};
