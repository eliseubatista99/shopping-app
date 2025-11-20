import { ReviewScoreInput } from "@components";
import { useReviewBlockHelper } from "./review.hook";

export const ReviewBlockMobile: React.FC = () => {
  const { score, onScoreChange } = useReviewBlockHelper();

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <ReviewScoreInput
        value={score}
        onClick={(value) => onScoreChange(value)}
        styles={{ padding: "20px 5px" }}
      />
    </div>
  );
};
