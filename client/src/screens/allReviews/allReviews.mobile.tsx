import { Assets } from "@assets";
import {
  AppButton,
  AppLayout,
  ProductScore,
  ReviewsList,
  ScorePercentageBar,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useAllReviewsPageHelper } from "./allReviews.hook";

export const AllReviewsMobile: React.FC = () => {
  const {
    onClickCreateReview,
    onClickFilters,
    onClickScore,
    i18n,
    scoreBars,
    averageScore,
    isInDetailedReview,
  } = useAllReviewsPageHelper();

  const scoreBarsJSX = scoreBars.map((s) => (
    <ScorePercentageBar
      key={s.score}
      score={s.score}
      percentage={s.percentage}
      onClick={() => {
        onClickScore(s.score);
      }}
    />
  ));

  return (
    <AppLayout
      pageStyles={{ padding: "0" }}
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      <ReviewsList
        showProductName
        topContent={
          <>
            {averageScore !== undefined && !isInDetailedReview && (
              <>
                <div
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
                    {i18n.title}
                  </Typography>
                  <div
                    style={{ cursor: "pointer", color: "#023492" }}
                    onClick={() => {
                      onClickFilters();
                    }}
                  >
                    <Typography styles={{ fontSize: "16px" }}>
                      {i18n.filters}
                    </Typography>
                  </div>
                </div>

                <ProductScore
                  score={averageScore || 0}
                  starsSize={16}
                  withScoreText
                  styles={{ marginTop: "8px" }}
                />
                <Typography
                  styles={{
                    fontSize: "16px",
                    fontWeight: 400,
                    marginTop: "8px",
                  }}
                >
                  {i18n.count}
                </Typography>
                {scoreBars.length > 0 && (
                  <>
                    <div
                      style={{ width: "100%", gap: "15px", marginTop: "40px" }}
                    >
                      {scoreBarsJSX}
                    </div>
                    <AppButton
                      text={{
                        content: i18n.create,
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
                        width: "95%",
                        padding: "20px",
                        background: "transparent",
                        border: "0.5px solid #000000",
                        justifyContent: "space-between",
                        margin: "25px auto 0 auto",
                      }}
                    />
                  </>
                )}
              </>
            )}
          </>
        }
      />
    </AppLayout>
  );
};
