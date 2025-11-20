import { Assets } from "@assets";
import {
  AppButton,
  ProductScore,
  ReviewListItem,
  Separator,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useReviewsBlockHelper } from "./reviews.hook";

export const ReviewsBlockMobile: React.FC = () => {
  const { i18n, score, reviews, onClickSeeAll, onClickCreateReview } =
    useReviewsBlockHelper();

  const reviewsJSX = reviews.map((r, index) => (
    <ReviewListItem
      key={r.id}
      review={r}
      styles={index === 0 ? { borderTop: "none" } : undefined}
    />
  ));

  return (
    <>
      <Separator styles={{ marginTop: "20px" }} />
      <Typography
        styles={{ fontSize: "20px", fontWeight: 600, marginTop: "20px" }}
      >
        {i18n.title}
      </Typography>
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ flex: 1 }}>
          <ProductScore starsSize={14} score={score.value} withScoreText />
          <Typography>{i18n.globalReviews.count}</Typography>
        </div>

        <Assets.Icons.NavRight
          width="25px"
          height="25px"
          onClick={() => onClickSeeAll()}
        />
      </div>
      {reviewsJSX.length > 0 && (
        <div style={{ width: "100%", marginTop: "20px" }}>{reviewsJSX}</div>
      )}

      <div style={{ width: "100%", marginTop: "10px" }}>
        <Separator />
        <div
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <Typography styles={{ fontSize: "18px", fontWeight: 600, flex: 1 }}>
            {i18n.reviews.seeAll}
          </Typography>

          <Assets.Icons.NavRight
            width="25px"
            height="25px"
            onClick={() => onClickSeeAll()}
          />
        </div>
        <Separator />
      </div>
      <AppButton
        text={{
          content: i18n.reviews.create,
          props: {
            styles: {
              fontSize: "16px",
            },
          },
        }}
        endContent={
          <Assets.Icons.NavRight
            width="20px"
            height="20px"
            onClick={() => onClickCreateReview()}
          />
        }
        onClick={() => onClickCreateReview()}
        styles={{
          width: "100%",
          padding: "20px",
          background: "transparent",
          border: "0.5px solid #000000",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      />
    </>
  );
};
