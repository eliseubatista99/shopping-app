import { OrderStatus, SortMode } from "@api";
import {
  ObjectsHelper,
  TimeHelper,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreOrders, type OrdersFilters } from "@store";
import React from "react";

export const useOrderFiltersDrawerHelper = () => {
  const oldestOrderDateInStore = useStoreOrders(
    (state) => state.oldestOrderDate
  );

  const storeFilters = useStoreOrders((state) => state.filters);

  const setOrderFilters = useStoreOrders((state) => state.setOrderFilters);

  const { t } = useAppTranslations();

  const [sortFilter, setSortFilter] = React.useState<SortMode | undefined>(
    storeFilters?.sortFilter
  );
  const [statusFilter, setStatusFilter] = React.useState<
    OrderStatus | undefined
  >(storeFilters?.statusFilter);

  const [startDateFilter, setStartDateFilter] = React.useState<
    string | undefined
  >(storeFilters?.startDateFilter);

  const [endDateFilter, setEndDateFilter] = React.useState<string | undefined>(
    storeFilters?.endDateFilter
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

    const startFilter = startDateFilter ? new Date(startDateFilter) : undefined;
    const endFilter = endDateFilter ? new Date(endDateFilter) : undefined;

    const result = [
      {
        startDate: thisMonthStartDate.toISOString(),
        endDate: today.toISOString(),
        isSelected:
          TimeHelper.isSameDate(startFilter, thisMonthStartDate) &&
          TimeHelper.isSameDate(endFilter, today),
        text: i18n.filters.date.lastMonth,
      },
      {
        startDate: threeMonthsAgoMonthStartDate.toISOString(),
        endDate: today.toISOString(),
        isSelected:
          TimeHelper.isSameDate(startFilter, threeMonthsAgoMonthStartDate) &&
          TimeHelper.isSameDate(endFilter, today),
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
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        isSelected:
          TimeHelper.isSameDate(startFilter, start) &&
          TimeHelper.isSameDate(endFilter, end),
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
    (startDate: string, endDate: string) => {
      const startFilter = startDateFilter
        ? new Date(startDateFilter)
        : undefined;
      const endFilter = endDateFilter ? new Date(endDateFilter) : undefined;

      const inputStart = new Date(startDate);
      const inputEnd = new Date(endDate);

      if (
        TimeHelper.isSameDate(startFilter, inputStart) &&
        TimeHelper.isSameDate(endFilter, inputEnd)
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
    const filters: OrdersFilters = {
      statusFilter,
      sortFilter,
      startDateFilter,
      endDateFilter,
    };

    if (!ObjectsHelper.isSameObject(filters, storeFilters)) {
      setOrderFilters(filters);
    }
  }, [
    endDateFilter,
    setOrderFilters,
    sortFilter,
    startDateFilter,
    statusFilter,
    storeFilters,
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
