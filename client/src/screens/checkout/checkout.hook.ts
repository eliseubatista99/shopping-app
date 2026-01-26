import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreCheckout } from "@store";
import React from "react";
import { useCheckout } from "../../hooks";

export const useCheckoutPageHelper = () => {
  const { goTo } = useNavigation();

  const isFetching = React.useRef(false);

  const productsInStore = useStoreCheckout((state) => state.products);

  const { updateCheckoutInfo } = useCheckout();

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

    await updateCheckoutInfo();

    // const res = await fetchGetCheckoutInfo({
    //   productIds: (productsInStore || []).map((p) => p.productId || ""),
    //   addressId: selectedAddress?.id || "",
    //   paymentMethodId: selectedPaymentMethod?.id || "",
    // });

    // setCheckoutStoreState({
    //   totalCost: res.data?.totalCost || 0,
    //   productCost: res.data?.productCost || 0,
    //   shippingCost: res.data?.shippingCost || 0,
    //   startDeliveryDate: res.data?.startDeliveryDate || "",
    //   endDeliveryDate: res.data?.endDeliveryDate || "",
    //   fastestDeliveryCost: res.data?.fastestDeliveryCost || 0,
    // });

    isFetching.current = false;
    // recalculate();
    setLoading(false);
  }, [goTo, productsInStore, updateCheckoutInfo]);

  useDidMount(() => {
    initScreen();
  });

  return {
    products: productsInStore,
    loading,
  };
};
