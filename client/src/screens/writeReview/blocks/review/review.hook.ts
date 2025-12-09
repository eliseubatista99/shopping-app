import { Api } from "@api";
import { INPUTS, PAGES, SEARCH_PARAMS, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
  useNavigation,
  type FormFieldConfiguration,
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
  const { fetchWriteReview } = Api.WriteReview();
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

  const submitReview = React.useCallback(
    async (score: number, title: string, description: string) => {
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
    },
    [client?.id, fetchWriteReview, goTo, selectedProduct?.id, showItem]
  );

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.REVIEW_DESCRIPTION,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.description.error,
          },
        },
        {
          name: INPUTS.REVIEW_TITLE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.title.error,
          },
        },
      ];
    }, [i18n.description.error, i18n.title.error]);

  const onSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      const description = FormsHelper.getField(data, INPUTS.REVIEW_DESCRIPTION);
      const title = FormsHelper.getField(data, INPUTS.REVIEW_TITLE);
      const scoreError = !score ? i18n.score.error : undefined;

      setForm((prevState) => ({
        ...prevState,
        scoreError,
        descriptionError: description?.error,
        titleError: title?.error,
      }));

      if (!scoreError && !title?.error && !description?.error) {
        submitReview(
          score,
          FormsHelper.getFieldValueOrDefault(title, ""),
          FormsHelper.getFieldValueOrDefault(description, "")
        );
      }
    },
    [i18n.score.error, score, submitReview]
  );

  return {
    i18n,
    score,
    form,
    onScoreChange,
    onSubmit,
    formConfiguration: getFormConfiguration(),
  };
};
