import { ProgressBar, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ScorePercentageBarProps } from "./scorePercentageBar";
import { useScorePercentageBarHelper } from "./scorePercentageBar.hook";

export const ScorePercentageBarMobile: React.FC<ScorePercentageBarProps> = (
  props
) => {
  const { i18n, percentage } = useScorePercentageBarHelper(props);
  const { styles, onClick } = props;

  return (
    <div
      data-testid="scorePercentageBar"
      style={{
        display: "grid",
        gridTemplateColumns: "max-content 1fr max-content",
        ...styles,
      }}
    >
      <div
        onClick={() => {
          if (percentage > 0) {
            onClick?.();
          }
        }}
        style={{
          minWidth: "75px",
          color: percentage > 0 ? "#023492ff" : "#000000ff",
          cursor: percentage > 0 ? "pointer" : undefined,
        }}
      >
        <Typography>{i18n.text}</Typography>
      </div>
      <ProgressBar
        percentage={percentage}
        styles={{ height: "20px", width: "100%" }}
      />
      <div
        onClick={() => {
          if (percentage > 0) {
            onClick?.();
          }
        }}
        style={{
          minWidth: "55px",
          textAlign: "end",
          color: percentage > 0 ? "#023492ff" : "#000000ff",
          cursor: percentage > 0 ? "pointer" : undefined,
        }}
      >
        <Typography
          styles={{
            textAlign: "end",
          }}
        >{`${percentage}%`}</Typography>
      </div>
    </div>
  );
};
