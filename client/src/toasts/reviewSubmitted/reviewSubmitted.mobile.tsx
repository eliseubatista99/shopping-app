import { Assets } from "@assets";
import { TOASTS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppToast } from "../_appToast";
import { useReviewSubmittedToastHelper } from "./reviewSubmitted.hook";

export const ReviewSubmittedToastMobile = () => {
  const { i18n } = useReviewSubmittedToastHelper();

  return (
    <AppToast id={TOASTS.REVIEW_SUBMITTED} styles={{ width: "60%" }}>
      <div
        style={{
          padding: "7px",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "#2cb200ff",
        }}
      >
        <Assets.Icons.Check width="20px" height="20px" />
      </div>
      <Typography>{i18n.title}</Typography>
    </AppToast>
  );
};
