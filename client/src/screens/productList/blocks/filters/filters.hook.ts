import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useFiltersBlockHelper = () => {
  const { t } = useAppTranslations();
  const { showItem } = useFeedback();

  const storeFilters = useStoreOrders((state) => state.filters);

  const i18n = React.useMemo(() => {
    return {
      placeholder: t("orders.filters.search.placeholder"),
      filters: t("global.filters"),
    };
  }, [t]);

  const onClickFilters = React.useCallback(() => {
    showItem(DRAWERS.PRODUCT_FILTERS);
  }, [showItem]);

  return {
    i18n,
    currentTextFilter: storeFilters?.textFilter,
    onClickFilters,
  };
};
