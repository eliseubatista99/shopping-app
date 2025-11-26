import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useFiltersBlockHelper = () => {
  const { t } = useAppTranslations();
  const { showItem } = useFeedback();

  const setStoreOrdersState = useStoreOrders((state) => state.setPartialState);
  const textFilter = useStoreOrders((state) => state.textFilter);
  const statusFilter = useStoreOrders((state) => state.statusFilter);
  const startDateFilter = useStoreOrders((state) => state.startDateFilter);
  const endDateFilter = useStoreOrders((state) => state.endDateFilter);

  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      placeholder: t("orders.filters.search.placeholder"),
      filters: t("global.filters"),
    };
  }, [t]);

  const onSearchBarFocus = React.useCallback(() => {
    setIsSearchFocused(true);
  }, []);

  const onSearchBarBlur = React.useCallback(() => {
    setIsSearchFocused(false);
  }, []);

  const onClickFilters = React.useCallback(() => {
    showItem(DRAWERS.ORDER_FILTERS);
  }, [showItem]);

  const submitSearch = React.useCallback(
    async (text: string) => {
      setStoreOrdersState({
        textFilter: text,
      });
    },
    [setStoreOrdersState]
  );

  return {
    i18n,
    isSearchFocused,
    submitSearch,
    onSearchBarFocus,
    onSearchBarBlur,
    onClickFilters,
  };
};
