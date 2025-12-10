import { Api, type OrderDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreOrders, type OrdersFilters } from "@store";
import React from "react";

export const useOrdersListBlockHelper = () => {
  const { t } = useAppTranslations();
  const { fetchGetClientOrders } = Api.GetClientOrders();
  const { goTo } = useNavigation();

  const setOrdersStoreState = useStoreOrders(
    (state) => state.setOrdersStoreState
  );
  const addOrders = useStoreOrders((state) => state.addOrders);
  const allOrders = useStoreOrders((state) => state.orders);

  const storeFilters = useStoreOrders((state) => state.filters);
  // const textFilter = useStoreOrders((state) => state.textFilter);
  // const statusFilter = useStoreOrders((state) => state.statusFilter);
  // const startDateFilter = useStoreOrders((state) => state.startDateFilter);
  // const endDateFilter = useStoreOrders((state) => state.endDateFilter);
  // const sortFilter = useStoreOrders((state) => state.sortFilter);

  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const hasRequestedOrdersOnce = React.useRef<boolean>(false);

  // const sortFilterCache = React.useRef<SortMode | undefined>(undefined);
  // const textFilterCache = React.useRef<string | undefined>(undefined);
  // const statusFilterCache = React.useRef<OrderStatus | undefined>(undefined);
  // const startDateFilterCache = React.useRef<Date | undefined>(undefined);
  // const endDateFilterCache = React.useRef<Date | undefined>(undefined);

  const i18n = React.useMemo(() => {
    return {
      title: t("orders.ordersList.title"),
    };
  }, [t]);

  const requestOrders = React.useCallback(async () => {
    const res = await fetchGetClientOrders({
      page: currentPage.current,
      pageCount: 10,
      filterByText: storeFilters?.textFilter,
      filterByStatus: storeFilters?.statusFilter,
      sortMode: storeFilters?.sortFilter,
      filterByStartDate: storeFilters?.startDateFilter,
      filterByEndDate: storeFilters?.endDateFilter,
    });

    if (res.metadata.success) {
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
  }, [
    addOrders,
    fetchGetClientOrders,
    setOrdersStoreState,
    storeFilters?.endDateFilter,
    storeFilters?.sortFilter,
    storeFilters?.startDateFilter,
    storeFilters?.statusFilter,
    storeFilters?.textFilter,
  ]);

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number, filters?: object) => {
      const parsedFilters = filters as OrdersFilters | undefined;

      const res = await fetchGetClientOrders({
        filterByText: parsedFilters?.textFilter,
        page: currentPage,
        pageCount: pageSize,
        filterByStatus: parsedFilters?.statusFilter,
        sortMode: parsedFilters?.sortFilter,
        filterByStartDate: parsedFilters?.startDateFilter,
        filterByEndDate: parsedFilters?.endDateFilter,
      });

      if (res.metadata.success) {
        if (currentPage < 1) {
          setOrdersStoreState({
            orders: res.data.orders,
            oldestOrderDate: res.data.oldestOrderDate,
          });
        } else {
          addOrders(res.data.orders);
        }
      }

      return {
        success: res.metadata.success,
        hasMorePages: res.data?.hasMorePages,
      };
    },
    [addOrders, fetchGetClientOrders, setOrdersStoreState]
  );

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (
        visible &&
        !isFetching.current &&
        hasMorePages.current &&
        hasRequestedOrdersOnce.current
      ) {
        currentPage.current += 1;
        requestOrders();
      }
    },
    [requestOrders]
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

  // React.useEffect(() => {
  //   if (
  //     (sortFilterCache.current !== sortFilter ||
  //       textFilterCache.current !== textFilter ||
  //       statusFilterCache.current !== statusFilter ||
  //       !TimeHelper.isSameDate(startDateFilterCache.current, startDateFilter) ||
  //       !TimeHelper.isSameDate(endDateFilterCache.current, endDateFilter)) &&
  //     hasRequestedOrdersOnce.current
  //   ) {
  //     sortFilterCache.current = sortFilter;
  //     textFilterCache.current = textFilter;
  //     statusFilterCache.current = statusFilter;
  //     startDateFilterCache.current = startDateFilter;
  //     endDateFilterCache.current = endDateFilter;
  //     currentPage.current = 0;

  //     requestOrders();
  //   }
  // }, [
  //   endDateFilter,
  //   requestOrders,
  //   sortFilter,
  //   startDateFilter,
  //   statusFilter,
  //   textFilter,
  // ]);

  // useDidMount(() => {
  //   requestOrders();
  // });

  return {
    i18n,
    orders: allOrders || [],
    handleRequestTrigger,
    onClickOrder,
    retrieveItems,
    storeFilters,
  };
};
