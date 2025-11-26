import {
  OrderStatus,
  SortMode,
  useFetchGetClientOrders,
  type OrderDto,
} from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  TimeHelper,
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useOrdersListBlockHelper = () => {
  const { t } = useAppTranslations();
  const { orderId } = useAppSearchParams();
  const { fetch: fetchGetClientOrders } = useFetchGetClientOrders();
  const { goTo } = useNavigation();

  const setOrdersStoreState = useStoreOrders((state) => state.setPartialState);
  const addOrders = useStoreOrders((state) => state.addOrders);
  const allOrders = useStoreOrders((state) => state.orders);

  const textFilter = useStoreOrders((state) => state.textFilter);
  const statusFilter = useStoreOrders((state) => state.statusFilter);
  const startDateFilter = useStoreOrders((state) => state.startDateFilter);
  const endDateFilter = useStoreOrders((state) => state.endDateFilter);
  const sortFilter = useStoreOrders((state) => state.sortFilter);

  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const hasRequestedOrdersOnce = React.useRef<boolean>(false);

  const sortFilterCache = React.useRef<SortMode | undefined>(undefined);
  const textFilterCache = React.useRef<string | undefined>(undefined);
  const statusFilterCache = React.useRef<OrderStatus | undefined>(undefined);
  const startDateFilterCache = React.useRef<Date | undefined>(undefined);
  const endDateFilterCache = React.useRef<Date | undefined>(undefined);

  const [loading, setLoading] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("orders.ordersList.title"),
    };
  }, [t]);

  const requestOrders = React.useCallback(async () => {
    isFetching.current = true;
    setLoading(true);

    const res = await fetchGetClientOrders({
      orderId: orderId?.value || "",
      filterByText: textFilter,
      page: currentPage.current,
      pageCount: 10,
      filterByStatus: statusFilter,
      sortMode: sortFilter,
      filterByStartDate: startDateFilter?.toISOString(),
      filterByEndDate: endDateFilter?.toISOString(),
    });

    if (res.metadata.success) {
      if (orderId.value) {
        res.data.orders = res.data.orders.filter((o) => o.id === orderId.value);
      }

      if (currentPage.current < 1) {
        setOrdersStoreState({
          orders: res.data.orders,
          oldestOrderDate: res.data.oldestOrderDate,
        });
      } else {
        addOrders(res.data.orders);
      }

      hasMorePages.current = res.data.hasMorePages;
    }

    setLoading(false);
    isFetching.current = false;
    hasRequestedOrdersOnce.current = true;
  }, [
    addOrders,
    endDateFilter,
    fetchGetClientOrders,
    orderId.value,
    setOrdersStoreState,
    sortFilter,
    startDateFilter,
    statusFilter,
    textFilter,
  ]);

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (
        visible &&
        !isFetching.current &&
        hasMorePages.current &&
        orderId.value === undefined &&
        hasRequestedOrdersOnce.current
      ) {
        currentPage.current += 1;
        requestOrders();
      }
    },
    [orderId.value, requestOrders]
  );

  const onClickOrder = React.useCallback(
    (order: OrderDto) => {
      goTo({
        path: PAGES.ORDER_DETAILS,
        params: {
          [SEARCH_PARAMS.ORDER_ID]: order.id,
        },
      });
    },
    [goTo]
  );

  React.useEffect(() => {
    if (
      (sortFilterCache.current !== sortFilter ||
        textFilterCache.current !== textFilter ||
        statusFilterCache.current !== statusFilter ||
        !TimeHelper.isSameDate(startDateFilterCache.current, startDateFilter) ||
        !TimeHelper.isSameDate(endDateFilterCache.current, endDateFilter)) &&
      hasRequestedOrdersOnce.current
    ) {
      sortFilterCache.current = sortFilter;
      textFilterCache.current = textFilter;
      statusFilterCache.current = statusFilter;
      startDateFilterCache.current = startDateFilter;
      endDateFilterCache.current = endDateFilter;
      currentPage.current = 0;

      requestOrders();
    }
  }, [
    endDateFilter,
    requestOrders,
    sortFilter,
    startDateFilter,
    statusFilter,
    textFilter,
  ]);

  useDidMount(() => {
    requestOrders();
  });

  return {
    i18n,
    isInDetailedOrder: orderId.value !== undefined,
    loading,
    orders: allOrders || [],
    handleRequestTrigger,
    onClickOrder,
  };
};
