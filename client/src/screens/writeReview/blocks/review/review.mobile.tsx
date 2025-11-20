import {
  AppButton,
  AppInputField,
  AppTextArea,
  ReviewScoreInput,
} from "@components";
import { Inputs } from "@constants";
import { Form } from "@eliseubatista99/react-scaffold-core";
import { useReviewBlockHelper } from "./review.hook";

export const ReviewBlockMobile: React.FC = () => {
  const { i18n, score, onScoreChange } = useReviewBlockHelper();

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        flex: 1,
      }}
    >
      <ReviewScoreInput
        value={score}
        onClick={(value) => onScoreChange(value)}
        styles={{ padding: "20px 5px" }}
      />

      <Form
        fields={[
          {
            name: Inputs.reviewDescription,
            content: (
              <AppTextArea
                label={i18n.description.title}
                name={Inputs.reviewDescription}
                placeHolder={i18n.description.placeholder}
                onChange={(v) => {
                  console.log(v);
                }}
                inputStyles={{ height: "150px", padding: "10px" }}
              />
            ),
          },
          {
            name: Inputs.reviewTitle,
            content: (
              <AppInputField
                label={i18n.title.title}
                name={Inputs.reviewTitle}
                placeHolder={i18n.title.placeholder}
                onChange={(v) => {
                  console.log(v);
                }}
                inputStyles={{ height: "150px", padding: "10px" }}
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
        onSubmit={(data) => {
          console.log(data);
        }}
        styles={{ flex: 1 }}
      />
    </div>
  );
};
