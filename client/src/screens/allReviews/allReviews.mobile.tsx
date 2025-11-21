import { AppLayout, AppLoader } from "@components";
import { useAllReviewsPageHelper } from "./allReviews.hook";
import { ProductBlock, ScoreBlock } from "./blocks";

export const AllReviewsMobile: React.FC = () => {
  const { loading, product } = useAllReviewsPageHelper();

  return (
    <AppLayout
      pageStyles={{ padding: "0" }}
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && product && (
        <>
          <ProductBlock />
          <div style={{ padding: "12px" }}>{<ScoreBlock />}</div>
        </>
      )}
    </AppLayout>
  );
};
