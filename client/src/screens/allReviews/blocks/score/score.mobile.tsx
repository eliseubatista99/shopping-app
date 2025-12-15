import type { ReviewDto } from "@api";
import { Assets } from "@assets";
import {
  AppButton,
  ItemsListTemplate,
  ProductScore,
  ReviewListItem,
  ScorePercentageBar,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useScoreBlockHelper } from "./score.hook";

export const ScoreBlockMobile: React.FC = () => {
  const {
    i18n,
    averageScore,
    scoreBars,
    onClickCreateReview,
    reviews,
    onClickFilters,
    isInDetailedReview,
    storeFilters,
    retrieveItems,
    onClickScore,
  } = useScoreBlockHelper();

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

  const renderItem = (i: unknown, index: number) => {
    const item = i as ReviewDto;

    return (
      <ReviewListItem
        key={item.id}
        review={item}
        styles={index === 0 ? { borderTop: "none" } : undefined}
      />
    );
  };

  return (
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
            styles={{ fontSize: "16px", fontWeight: 400, marginTop: "8px" }}
          >
            {i18n.count}
          </Typography>
          {scoreBars.length > 0 && (
            <>
              <div style={{ width: "100%", gap: "15px", marginTop: "40px" }}>
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
      <ItemsListTemplate
        items={reviews}
        renderItem={renderItem}
        retrieveItems={retrieveItems}
        filters={storeFilters}
      />
    </>
  );
};
