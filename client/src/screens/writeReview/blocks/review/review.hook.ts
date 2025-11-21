import { useFetchWriteReview } from "@api";
import { INPUTS, PAGES, SEARCH_PARAMS, TOASTS } from "@constants";
import {
  useFeedback,
  useNavigation,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

type ReviewForm = {
  scoreError?: string;
  descriptionError?: string;
  titleError?: string;
};

export const useReviewBlockHelper = () => {
  const { t } = useAppTranslations();
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const client = useStoreBase((state) => state.client);
  const { fetch: fetchWriteReview } = useFetchWriteReview();
  const { showItem } = useFeedback();
  const { goTo } = useNavigation();

  const [score, setScore] = React.useState<number>(0);
  const [form, setForm] = React.useState<ReviewForm>({});

  const i18n = React.useMemo(() => {
    return {
      score: {
        error: t("writeReview.review.score.error"),
      },
      description: {
        title: t("writeReview.review.description.title"),
        placeholder: t("writeReview.review.description.placeholder"),
        error: t("writeReview.review.description.error"),
      },
      title: {
        title: t("writeReview.review.title.title"),
        placeholder: t("writeReview.review.title.placeholder"),
        error: t("writeReview.review.title.error"),
      },
    };
  }, [t]);

  const onScoreChange = (value: number) => {
    setScore(value);
  };

  const submitReview = async (
    score: number,
    title: string,
    description: string
  ) => {
    const res = await fetchWriteReview({
      reviewerId: client?.id || "",
      productId: selectedProduct?.id || "",
      title,
      description,
      score,
    });

    if (res.metadata.success) {
      showItem(TOASTS.REVIEW_SUBMITTED);
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: selectedProduct?.id,
        },
        addToHistory: false,
      });
    }

    console.log("SUBMIT", { score, title, description, res });
  };

  const onSubmit = (data: FormFieldOutputData[]) => {
    const description = data.find((d) => d.name === INPUTS.REVIEW_DESCRIPTION)
      ?.value as string;
    const title = data.find((d) => d.name === INPUTS.REVIEW_TITLE)
      ?.value as string;

    const titleError = !title ? i18n.title.error : undefined;
    const descriptionError = !description ? i18n.description.error : undefined;
    const scoreError = !score ? i18n.score.error : undefined;

    setForm((prevState) => ({
      ...prevState,
      scoreError,
      descriptionError,
      titleError,
    }));

    if (!scoreError && !titleError && !descriptionError) {
      submitReview(score, title, description);
    }
  };

  return {
    i18n,
    score,
    form,
    onScoreChange,
    onSubmit,
  };
};
