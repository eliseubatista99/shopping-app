import { useFetchExecutePurchase } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCheckout } from "@store";
import React from "react";

export const useExecutionBlockHelper = () => {
  const { t } = useAppTranslations();
  const { fetch: fetchExecutePurchaseInfo } = useFetchExecutePurchase();
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption
  );
  const products = useStoreCheckout((state) => state.products);
  const selectedAddress = useStoreBase((state) => state.selectedAddress);
  const selectedPaymentMethod = useStoreBase(
    (state) => state.selectedPaymentMethod
  );

  const i18n = React.useMemo(() => {
    return {
      buyNow: t("global.actions.buyNow"),
    };
  }, [t]);

  const onClickBuyNow = React.useCallback(async () => {
    const res = await fetchExecutePurchaseInfo({
      products: products.map((p) => ({
        productId: p.id,
        quantity: p.quantity,
      })),
      addressId: selectedAddress?.id || "",
      paymentMethodId: selectedPaymentMethod?.id || "",
      wantsFastShipping: wantsFastestOption || false,
    });

    if (res.metadata.success) {
      //
    }
  }, [
    fetchExecutePurchaseInfo,
    products,
    selectedAddress?.id,
    selectedPaymentMethod?.id,
    wantsFastestOption,
  ]);

  return {
    i18n,
    onClickBuyNow,
  };
};
