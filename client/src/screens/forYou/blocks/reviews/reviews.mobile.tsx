import { useReviewsBlockHelper } from "./reviews.hook";

export const ReviewsBlockMobile: React.FC = () => {
  const { i18n } = useReviewsBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
