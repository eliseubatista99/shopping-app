import { OrderStatus, SortMode } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreOrders, useStoreProduct } from "@store";
import React from "react";

export const useOrderFiltersDrawerHelper = () => {
  const setStoreSortFilter = useStoreProduct((state) => state.setSortFilter);
  const setStoreStatusFilter = useStoreOrders((state) => state.setStatusFilter);
  const { t } = useAppTranslations();

  const [sortFilter, setSortFilter] = React.useState<SortMode | undefined>(
    undefined
  );
  const [statusFilter, setStatusFilter] = React.useState<
    OrderStatus | undefined
  >(undefined);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.orderFilters.title"),
      sort: t("drawers.orderFilters.sort"),
      date: t("drawers.orderFilters.date"),
      status: t("drawers.orderFilters.status"),
      filters: {
        sort: (sort: SortMode) => t(`global.filters.sort.${sort}`),
        status: (value: OrderStatus) =>
          t(`global.filters.orderStatus.${value}`),
      },
    };
  }, [t]);

  const sortOptions = React.useMemo(() => {
    return [
      {
        option: SortMode.OldToNew,
        isSelected: sortFilter === SortMode.OldToNew,
        text: i18n.filters.sort(SortMode.OldToNew),
      },
      {
        option: SortMode.NewToOld,
        isSelected: sortFilter === SortMode.NewToOld,
        text: i18n.filters.sort(SortMode.NewToOld),
      },
    ];
  }, [i18n.filters, sortFilter]);

  const statusOptions = React.useMemo(() => {
    return Object.values(OrderStatus).map((s) => ({
      option: s,
      isSelected: statusFilter === s,
      text: i18n.filters.status(s),
    }));
  }, [i18n.filters, statusFilter]);

  const onClickSortFilter = React.useCallback(
    (value: SortMode) => {
      if (sortFilter === value) {
        setSortFilter(undefined);
      } else {
        setSortFilter(value);
      }
    },
    [sortFilter]
  );

  const onClickStatusFilter = React.useCallback(
    (value: OrderStatus) => {
      if (statusFilter === value) {
        setStatusFilter(undefined);
      } else {
        setStatusFilter(value);
      }
    },
    [statusFilter]
  );
  const onClose = React.useCallback(() => {
    setStoreStatusFilter(statusFilter);
    setStoreSortFilter(sortFilter);
  }, [setStoreSortFilter, setStoreStatusFilter, sortFilter, statusFilter]);

  return {
    i18n,
    sortOptions,
    statusOptions,
    onClickStatusFilter,
    onClickSortFilter,
    onClose,
  };
};
