import { AppLayout, AppLoader } from "@components";
import { ProductBlock } from "./blocks";
import { useWriteReviewPageHelper } from "./writeReview.hook";

export const WriteReviewMobile: React.FC = () => {
  const { loading, product } = useWriteReviewPageHelper();

  return (
    <AppLayout
      pageStyles={{ padding: "12px" }}
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
        </>
      )}
    </AppLayout>
  );
};
