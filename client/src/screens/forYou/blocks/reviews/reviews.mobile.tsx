import { ProductImage, ProductScore } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useReviewsBlockHelper } from "./reviews.hook";

export const ReviewsBlockMobile: React.FC = () => {
  const {
    i18n,
    review,
    needingReviewProduct,
    onClickSeeAll,
    onClickNeedingReview,
    onClickReview,
  } = useReviewsBlockHelper();

  const box = (
    content: React.ReactNode,
    onClick: () => void,
    styles?: React.CSSProperties,
  ) => (
    <div
      onClick={onClick}
      style={{
        aspectRatio: "1/1",
        borderRadius: "10px",
        border: "1px solid #bbbbbbff",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        ...styles,
      }}
    >
      {content}
    </div>
  );

  return (
    <>
      {(review || needingReviewProduct) && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
              {i18n.title}
            </Typography>
            <div onClick={() => onClickSeeAll()} style={{ color: "#000ac1ff" }}>
              <Typography>{i18n.seeAll}</Typography>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginTop: "20px",
            }}
          >
            {needingReviewProduct &&
              box(
                <>
                  <ProductImage
                    image={needingReviewProduct.image}
                    styles={{
                      height: "70%",
                      width: "70%",
                      border: "1px solid #bbbbbbff",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    styles={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "12px",
                    }}
                  >
                    {i18n.thoughts}
                  </Typography>
                </>,
                () => onClickNeedingReview(),
                {
                  justifyContent: "space-between",
                },
              )}
            {review &&
              box(
                <>
                  <ProductScore score={review.score} starsSize={14} />
                  <Typography
                    styles={{
                      width: "100%",
                      fontSize: "13px",
                      fontWeight: 400,
                    }}
                  >
                    {review.title}
                  </Typography>
                  <Typography
                    styles={{
                      width: "100%",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                    maxNumberOfLines={2}
                  >
                    {review.comment}
                  </Typography>
                  <ProductImage
                    image={review.productIcon}
                    styles={{
                      bottom: "10px",
                      right: "10px",
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      border: "1px solid #bbbbbbff",
                      borderRadius: "10px",
                    }}
                  />
                </>,
                () => onClickReview(),
                {
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "5px",
                },
              )}
          </div>
        </div>
      )}
    </>
  );
};
