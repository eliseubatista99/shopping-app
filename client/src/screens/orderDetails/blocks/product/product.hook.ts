import type { ProductDto } from "@api";
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

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
      });
    },
    [goTo]
  );

  const onClickWriteReview = React.useCallback(
    (product: ProductDto) => {
      setReviewsStoreState({
        productId: product.id,
        productName: product.name,
        productImage: product.image,
      });

      goTo({
        path: PAGES.WRITE_REVIEW,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
      });
    },
    [goTo, setReviewsStoreState]
  );

  return {
    i18n,
    selectedOrder,
    currency,
    onClickProduct,
    onClickBuyAgain: onClickProduct,
    onClickWriteReview,
  };
};
