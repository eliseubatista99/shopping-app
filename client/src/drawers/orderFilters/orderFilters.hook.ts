import { OrderStatus, SortMode } from "@api";
import { TimeHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useOrderFiltersDrawerHelper = () => {
  const oldestOrderDateInStore = useStoreOrders(
    (state) => state.oldestOrderDate
  );

  const setStoreSortFilter = useStoreOrders((state) => state.setSortFilter);
  const setStoreStatusFilter = useStoreOrders((state) => state.setStatusFilter);
  const setStoreStartDateFilter = useStoreOrders(
    (state) => state.setStartDateFilter
  );
  const setStoreEndDateFilter = useStoreOrders(
    (state) => state.setEndDateFilter
  );
  const { t } = useAppTranslations();

  const [sortFilter, setSortFilter] = React.useState<SortMode | undefined>(
    undefined
  );
  const [statusFilter, setStatusFilter] = React.useState<
    OrderStatus | undefined
  >(undefined);

  const [startDateFilter, setStartDateFilter] = React.useState<
    Date | undefined
  >(undefined);

  const [endDateFilter, setEndDateFilter] = React.useState<Date | undefined>(
    undefined
  );

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
        date: {
          lastMonth: t("drawers.orderFilters.date.lastMonth"),
          lastThreeMonths: t("drawers.orderFilters.date.lastThreeMonths"),
        },
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

  const dateOptions = React.useMemo(() => {
    const today = new Date();
    const thisMonthStartDate = new Date(today);
    thisMonthStartDate.setDate(1);

    const threeMonthsAgoMonthStartDate = new Date(today);
    threeMonthsAgoMonthStartDate.setDate(1);
    threeMonthsAgoMonthStartDate.setMonth(thisMonthStartDate.getMonth() - 3);

    const result = [
      {
        startDate: thisMonthStartDate,
        endDate: today,
        isSelected:
          TimeHelper.isSameDate(startDateFilter, thisMonthStartDate) &&
          TimeHelper.isSameDate(endDateFilter, today),
        text: i18n.filters.date.lastMonth,
      },
      {
        startDate: threeMonthsAgoMonthStartDate,
        endDate: today,
        isSelected:
          TimeHelper.isSameDate(
            startDateFilter,
            threeMonthsAgoMonthStartDate
          ) && TimeHelper.isSameDate(endDateFilter, today),
        text: i18n.filters.date.lastThreeMonths,
      },
    ];

    const oldestOrderYear =
      TimeHelper.getDateInUTC(oldestOrderDateInStore)?.year ||
      today.getFullYear();

    const todayYear = today.getFullYear();

    for (let i = oldestOrderYear; i <= todayYear; i++) {
      const start = new Date(i, 0, 1);
      const end = new Date(i, 11, 31);

      result.push({
        startDate: start,
        endDate: end,
        isSelected:
          TimeHelper.isSameDate(startDateFilter, start) &&
          TimeHelper.isSameDate(endDateFilter, end),
        text: `${i}`,
      });
    }

    return result;
  }, [
    endDateFilter,
    i18n.filters.date.lastMonth,
    i18n.filters.date.lastThreeMonths,
    oldestOrderDateInStore,
    startDateFilter,
  ]);

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

  const onClickDateFilter = React.useCallback(
    (startDate: Date, endDate: Date) => {
      if (
        TimeHelper.isSameDate(startDateFilter, startDate) &&
        TimeHelper.isSameDate(endDateFilter, endDate)
      ) {
        setStartDateFilter(undefined);
        setEndDateFilter(undefined);
      } else {
        setStartDateFilter(startDate);
        setEndDateFilter(endDate);
      }
    },
    [endDateFilter, startDateFilter]
  );

  const onClose = React.useCallback(() => {
    setStoreStatusFilter(statusFilter);
    setStoreSortFilter(sortFilter);
    setStoreStartDateFilter(startDateFilter);
    setStoreEndDateFilter(endDateFilter);
  }, [
    endDateFilter,
    setStoreEndDateFilter,
    setStoreSortFilter,
    setStoreStartDateFilter,
    setStoreStatusFilter,
    sortFilter,
    startDateFilter,
    statusFilter,
  ]);

  return {
    i18n,
    dateOptions,
    sortOptions,
    statusOptions,
    onClickStatusFilter,
    onClickSortFilter,
    onClickDateFilter,
    onClose,
  };
};
