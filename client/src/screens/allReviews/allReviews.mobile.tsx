import { AppLayout, AppLoader } from "@components";
import { useAllReviewsPageHelper } from "./allReviews.hook";
import { ProductBlock, ScoreBlock } from "./blocks";

export const AllReviewsMobile: React.FC = () => {
  const { loading } = useAllReviewsPageHelper();

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
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <ProductBlock />
          <div style={{ padding: "12px", flex: 1 }}>{<ScoreBlock />}</div>
        </>
      )}
    </AppLayout>
  );
};
