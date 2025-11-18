import { TimeHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

export const usePurchaseBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    const deliveryDate = TimeHelper.getDateInUTC(
      selectedProduct?.estimatedDeliveryDate
    );
    const month = t(`time.month.long.${deliveryDate?.month}`);
    const weekday = t(`time.month.long.${deliveryDate?.weekday}`);
    const extenseDate = t("time.date.extense", {
      weekday,
      day: deliveryDate?.day,
      month,
      year: deliveryDate?.year,
    });

    return {
      pricing: {
        originalPrice: t("productDetails.price.original"),
        vat: t("productDetails.price.vatIncluded"),
      },
      delivery: {
        cost: selectedProduct?.shippingCost
          ? t("productDetails.delivery.paid", {
              value: selectedProduct?.shippingCost,
            })
          : t("productDetails.delivery.free"),
        date: t("productDetails.delivery.date", {
          date: extenseDate,
        }),
      },
    };
  }, [
    selectedProduct?.estimatedDeliveryDate,
    selectedProduct?.shippingCost,
    t,
  ]);

  const calculatedPrices = React.useMemo(() => {
    const originalPrice = selectedProduct?.originalPrice || 1;
    const price = selectedProduct?.price || 1;

    if (price === originalPrice) {
      return {
        price,
        originalPrice: undefined,
        discount: undefined,
      };
    }

    const discount = Number((1 - price / originalPrice).toFixed(2));
    const discountPercentage = discount * 100;

    return {
      price,
      originalPrice,
      discount: discountPercentage,
    };
  }, [selectedProduct?.originalPrice, selectedProduct?.price]);

  return {
    i18n,
    product: selectedProduct,
    currency,
    calculatedPrices,
  };
};
