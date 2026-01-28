import { ApiEndpoints } from "@api";
import {
  useStoreAddresses,
  useStoreCheckout,
  useStorePaymentMethods,
} from "@store";
import { useCallback } from "react";

export const useCheckout = () => {
  const { fetchGetCheckoutInfo } = ApiEndpoints.GetCheckoutInfo();

  const productsInStore = useStoreCheckout((state) => state.products);
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption,
  );

  const selectedAddress = useStoreAddresses((state) => state.selectedAddress);
  const selectedPaymentMethod = useStorePaymentMethods(
    (state) => state.selectedPaymentMethod,
  );

  const setCheckoutStoreState = useStoreCheckout(
    (state) => state.setCheckoutStoreState,
  );

  const updateCheckoutInfo = useCallback(async () => {
    const prodIds: string[] = [];

    (productsInStore || []).forEach((p) => {
      for (let i = 0; i < p.quantity; i++) {
        prodIds.push(p.productId || "");
      }
    });

    const res = await fetchGetCheckoutInfo({
      productIds: prodIds,
      addressId: selectedAddress?.id || "",
      paymentMethodId: selectedPaymentMethod?.id || "",
      wantsFastShipping: wantsFastestOption || false,
    });

    setCheckoutStoreState({
      totalCost: res.data?.totalCost || 0,
      productCost: res.data?.productCost || 0,
      shippingCost: res.data?.shippingCost || 0,
      startDeliveryDate: res.data?.startDeliveryDate || "",
      endDeliveryDate: res.data?.endDeliveryDate || "",
      fastestDeliveryCost: res.data?.fastestDeliveryCost || 0,
    });

    return {
      totalCost: res.data?.totalCost || 0,
      productCost: res.data?.productCost || 0,
      shippingCost: res.data?.shippingCost || 0,
      startDeliveryDate: res.data?.startDeliveryDate || "",
      endDeliveryDate: res.data?.endDeliveryDate || "",
      fastestDeliveryCost: res.data?.fastestDeliveryCost || 0,
    };
  }, [
    fetchGetCheckoutInfo,
    productsInStore,
    selectedAddress?.id,
    selectedPaymentMethod?.id,
    setCheckoutStoreState,
    wantsFastestOption,
  ]);

  return {
    updateCheckoutInfo,
  };
};
