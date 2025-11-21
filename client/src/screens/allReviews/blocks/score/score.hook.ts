import {
  useFetchGetProductReviews,
  type ReviewDto,
  type ScoreCountDto,
} from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  NumberHelper,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const { t } = useAppTranslations();
  const { fetch: fetchGetProductReviews } = useFetchGetProductReviews();

  const selectedProduct = useStoreProduct((state) => state.selectedProduct);

  const [allReviews, setAllReviews] = React.useState<ReviewDto[]>([]);
  const [scoreCounts, setScoreCounts] = React.useState<ScoreCountDto[]>([]);

  const { goTo } = useNavigation();

  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("allReviews.score.title"),
      count: t("allReviews.score.count", {
        count: selectedProduct?.scoreCount,
      }),
      create: t("allReviews.score.create"),
    };
  }, [selectedProduct?.scoreCount, t]);

  const scoreBars = React.useMemo(() => {
    const totalScoreCount = selectedProduct?.scoreCount || 0;

    return (scoreCounts || []).map((s) => ({
      score: s.score,
      percentage: NumberHelper.clamp((s.count / totalScoreCount) * 100, 0, 100),
    }));
  }, [scoreCounts, selectedProduct?.scoreCount]);

  const onClickCreateReview = React.useCallback(() => {
    //Go to review screen
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedProduct?.id,
      },
    });
  }, [goTo, selectedProduct?.id]);

  const requestReviews = React.useCallback(async () => {
    isFetching.current = true;
    setLoading(true);

    const res = await fetchGetProductReviews({
      productId: selectedProduct?.id || "",
      page: currentPage.current,
      pageCount: 10,
    });

    if (res.metadata.success) {
      setScoreCounts(res.data.scores);
      setAllReviews((prevState) => [...prevState, ...res.data.reviews]);
      hasMorePages.current = res.data.hasMorePages;
    }

    setLoading(false);
    isFetching.current = false;
  }, [fetchGetProductReviews, selectedProduct?.id]);

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (visible && !isFetching.current && hasMorePages.current) {
        currentPage.current += 1;
        requestReviews();
      }
    },
    [requestReviews]
  );

  return {
    i18n,
    loading,
    scoreBars,
    product: selectedProduct,
    reviews: allReviews || [],
    onClickCreateReview,
    handleRequestTrigger,
  };
};
