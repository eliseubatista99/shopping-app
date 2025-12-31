import { ApiEndpoints } from "@api";
import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreOrders } from "@store";
import React, { useEffect } from "react";

export const useOrderDetailsPageHelper = () => {
  const { orderId } = useAppSearchParams();
  const { goTo } = useNavigation();
  const setOrdersStoreState = useStoreOrders(
    (state) => state.setOrdersStoreState
  );
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const { fetchGetOrderDetails } = ApiEndpoints.GetOrderDetails();

  const isFetching = React.useRef(false);
  const cachedOrderId = React.useRef<string | undefined>(undefined);

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    if (!orderId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: false });
    }

    const res = await fetchGetOrderDetails({
      orderId: orderId.value || "",
    });

    setOrdersStoreState({ selectedOrder: res.data?.order });

    isFetching.current = false;
    setLoading(false);
  }, [fetchGetOrderDetails, goTo, orderId.value, setOrdersStoreState]);

  useEffect(() => {
    if (orderId.value !== cachedOrderId.current) {
      cachedOrderId.current = orderId.value;

      initScreen();
    }
  }, [initScreen, orderId.value]);

  return {
    loading,
    selectedOrder,
  };
};
