import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreOrders, useStoreReviews } from "@store";
import React from "react";

export const useProductBlockHelper = () => {
  const { t, translateDate } = useAppTranslations();
  const { goTo } = useNavigation();
  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState
  );
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const currency = useStoreBase((state) => state.currency);

  const i18n = React.useMemo(() => {
    const lastStatusDateTranslation = translateDate(
      selectedOrder?.currentStatus?.date
    );

    return {
      statusDate: t(
        `global.orderStatus.history.${selectedOrder?.currentStatus?.status}`,
        {
          date: lastStatusDateTranslation.orderDate,
        }
      ),
      soldBy: t("orderDetails.product.seller"),
      actions: {
        buyAgain: t("orderDetails.product.actions.buyAgain"),
        writeReview: t("orderDetails.product.actions.writeReview"),
      },
    };
  }, [
    selectedOrder?.currentStatus?.date,
    selectedOrder?.currentStatus?.status,
    t,
    translateDate,
  ]);

  const onClickProduct = React.useCallback(() => {
    goTo({
      path: PAGES.PRODUCT_DETAILS,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedOrder?.product.id,
      },
    });
  }, [goTo, selectedOrder?.product.id]);

  const onClickWriteReview = React.useCallback(() => {
    setReviewsStoreState({
      productId: selectedOrder?.product?.id,
      productName: selectedOrder?.product.name,
      productImage: selectedOrder?.product.image,
    });

    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedOrder?.product?.id,
      },
    });
  }, [
    goTo,
    selectedOrder?.product?.id,
    selectedOrder?.product.image,
    selectedOrder?.product.name,
    setReviewsStoreState,
  ]);

  return {
    i18n,
    selectedOrder,
    currency,
    onClickProduct,
    onClickBuyAgain: onClickProduct,
    onClickWriteReview,
  };
};
