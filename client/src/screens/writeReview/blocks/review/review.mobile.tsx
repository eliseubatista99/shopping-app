import {
  AppButton,
  AppInputField,
  AppTextArea,
  ReviewScoreInput,
} from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useReviewBlockHelper } from "./review.hook";

export const ReviewBlockMobile: React.FC = () => {
  const { i18n, score, onScoreChange, onSubmit, form } = useReviewBlockHelper();

  const errorMessage = (error?: string) => {
    if (!error) {
      return undefined;
    }

    return (
      <Typography
        styles={{ fontSize: "16px", fontWeight: 600, color: "#de1616ff" }}
      >
        {error}
      </Typography>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div style={{ width: "100%", padding: "20px 0" }}>
        <ReviewScoreInput
          value={score}
          onClick={(value) => onScoreChange(value)}
          styles={{ padding: "0 5px" }}
        />
        {errorMessage(form.scoreError)}
      </div>

      <Form
        fields={[
          {
            name: INPUTS.REVIEW_DESCRIPTION,
            content: (
              <AppTextArea
                label={i18n.description.title}
                name={INPUTS.REVIEW_DESCRIPTION}
                placeHolder={i18n.description.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.descriptionError)}
              />
            ),
          },
          {
            name: INPUTS.REVIEW_TITLE,
            content: (
              <AppInputField
                label={i18n.title.title}
                name={INPUTS.REVIEW_TITLE}
                placeHolder={i18n.title.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.titleError)}
              />
            ),
          },
        ]}
        submitButton={{
          content: (
            <AppButton
              text={{
                content: i18n.description.title,
                props: {
                  styles: {
                    fontSize: "16px",
                  },
                },
              }}
              styles={{ width: "100%", padding: "20px" }}
            />
          ),
          styles: {
            marginTop: "auto",
          },
        }}
        onSubmit={onSubmit}
        styles={{ flex: 1, gap: "30px" }}
      />
    </div>
  );
};
