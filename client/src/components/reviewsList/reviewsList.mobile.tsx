import { AppLoader, type ReviewsListProps } from "@components";
import { ProductBlock, ScoreBlock } from "./blocks";
import { useReviewsListHelper } from "./reviewsList.hook";

export const ReviewsListMobile: React.FC<ReviewsListProps> = (props) => {
  const { loading } = useReviewsListHelper();
  const { styles, showProductName, topContent } = props;

  return (
    <div style={{ width: "100%", ...styles }}>
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          {showProductName && <ProductBlock />}
          <div style={{ padding: "12px", flex: 1 }}>
            {topContent}
            {<ScoreBlock />}
          </div>
        </>
      )}
    </div>
  );
};
