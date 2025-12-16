import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import type { TryAgainSectionProps } from "./tryAgainSection";
import { useTryAgainSectionHelper } from "./tryAgainSection.hook";

export const TryAgainSectionMobile: React.FC<TryAgainSectionProps> = (
  props
) => {
  const { i18n } = useTryAgainSectionHelper(props);
  const { styles, onClickRetry } = props;

  return (
    <div
      data-testid="tryAgainSection"
      style={{
        width: "100%",
        padding: "40px 20px",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flex: 1,
        ...styles,
      }}
    >
      <Typography
        styles={{ textAlign: "center", fontSize: "16px", fontWeight: 400 }}
      >
        {i18n.text}
      </Typography>
      <AppButton
        text={{
          content: i18n.actions.try,
          props: {
            styles: {
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 400,
            },
          },
        }}
        onClick={() => onClickRetry()}
        styles={{
          width: "80%",
        }}
      />
    </div>
  );
};
