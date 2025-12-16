import { AppLayout, AuthenticatedScreen, ReviewsList } from "@components";
import { PAGES } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useMyReviewsPageHelper } from "./myReviews.hook";

export const MyReviewsMobile: React.FC = () => {
  const { i18n } = useMyReviewsPageHelper();

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
      <AuthenticatedScreen returnPage={PAGES.MY_REVIEWS}>
        <ReviewsList
          topContent={
            <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
              {i18n.title}
            </Typography>
          }
        />
      </AuthenticatedScreen>
    </AppLayout>
  );
};
