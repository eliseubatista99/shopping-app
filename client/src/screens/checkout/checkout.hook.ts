import { useFetchGetCheckoutInfo } from "@api";
import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreBase, useStoreCheckout } from "@store";
import React from "react";

export const useCheckoutPageHelper = () => {
  const { goTo } = useNavigation();

  const isFetching = React.useRef(false);

  const selectedAddress = useStoreBase((state) => state.selectedAddress);
  const selectedPaymentMethod = useStoreBase(
    (state) => state.selectedPaymentMethod
  );
  const productsInStore = useStoreCheckout((state) => state.products);
  const setCheckoutStoreState = useStoreCheckout(
    (state) => state.setPartialState
  );

  const { fetch: fetchGetCheckoutInfo } = useFetchGetCheckoutInfo();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    if ((productsInStore || []).length < 1) {
      goTo({
        path: PAGES.NOT_FOUND,
        addToHistory: false,
      });
    }

    const res = await fetchGetCheckoutInfo({
      productIds: (productsInStore || []).map((p) => p.id || ""),
      addressId: selectedAddress?.id || "",
      paymentMethodId: selectedPaymentMethod?.id || "",
    });

    setCheckoutStoreState({
      products: res.data.products,
      productCost: res.data.productCost,
      shippingCost: res.data.shippingCost,
      totalCost: res.data.totalCost,
      startDeliveryDate: res.data.startDeliveryDate,
      endDeliveryDate: res.data.endDeliveryDate,
      fastestDeliveryCost: res.data.fastestDeliveryCost,
    });
    // setProductStoreState({ selectedProduct: res.data.product });

    isFetching.current = false;
    setLoading(false);
  }, [
    fetchGetCheckoutInfo,
    goTo,
    productsInStore,
    selectedAddress?.id,
    selectedPaymentMethod?.id,
    setCheckoutStoreState,
  ]);

  useDidMount(() => {
    initScreen();
  });

  return {
    products: productsInStore,
    loading,
  };
};
