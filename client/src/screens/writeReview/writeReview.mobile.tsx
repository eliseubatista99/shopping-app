import { AppLayout, AppLoader, AuthenticatedScreen } from "@components";
import { PAGES } from "@constants";
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
      <AuthenticatedScreen returnPage={PAGES.WRITE_REVIEW}>
        {loading && <AppLoader visible={loading} />}
        {!loading && (
          <>
            <ProductBlock />
            <ReviewBlock />
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
