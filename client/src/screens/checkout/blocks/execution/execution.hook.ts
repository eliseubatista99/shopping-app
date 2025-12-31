import { ApiEndpoints } from "@api";
import { OVERLAYS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import {
  useStoreAddresses,
  useStoreCheckout,
  useStorePaymentMethods,
} from "@store";
import React from "react";

export const useExecutionBlockHelper = () => {
  const { t } = useAppTranslations();
  const { showItem, hideItem } = useFeedback();
  const { fetchExecutePurchaseInfo } = ApiEndpoints.ExecutePurchase();
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption
  );
  const products = useStoreCheckout((state) => state.products);
  const selectedAddress = useStoreAddresses((state) => state.selectedAddress);
  const selectedPaymentMethod = useStorePaymentMethods(
    (state) => state.selectedPaymentMethod
  );

  const i18n = React.useMemo(() => {
    return {
      buyNow: t("global.actions.buyNow"),
    };
  }, [t]);

  const onClickBuyNow = React.useCallback(async () => {
    showItem(OVERLAYS.LOADER);
    const res = await fetchExecutePurchaseInfo({
      products: products || [],
      addressId: selectedAddress?.id || "",
      paymentMethodId: selectedPaymentMethod?.id || "",
      wantsFastShipping: wantsFastestOption || false,
    });

    if (res.metadata?.success) {
      //
    }

    hideItem(OVERLAYS.LOADER);
  }, [
    fetchExecutePurchaseInfo,
    hideItem,
    products,
    selectedAddress?.id,
    selectedPaymentMethod?.id,
    showItem,
    wantsFastestOption,
  ]);

  return {
    i18n,
    onClickBuyNow,
  };
};
