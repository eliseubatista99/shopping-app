import { AppLayout, AppLoader } from "@components";
import { ProductBlock, ReviewBlock } from "./blocks";
import { useWriteReviewPageHelper } from "./writeReview.hook";

export const WriteReviewMobile: React.FC = () => {
  const { loading } = useWriteReviewPageHelper();

  return (
    <AppLayout
      pageStyles={{ padding: "12px" }}
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
          <ReviewBlock />
        </>
      )}
    </AppLayout>
  );
};
