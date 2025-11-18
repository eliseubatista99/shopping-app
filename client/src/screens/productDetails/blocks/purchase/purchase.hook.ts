import { Drawers } from "@constants";
import { TimeHelper, useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

export const usePurchaseBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const getSelectedAddress = useStoreBase((state) => state.getSelectedAddress);
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();
  const { showItem } = useFeedback();

  const [quantity, setQuantity] = React.useState<number>(1);

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

    const selectedAddress = getSelectedAddress();

    return {
      actions: {
        addToCard: t("global.actions.addToCart"),
        buyNow: t("global.actions.buyNow"),
      },
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
        address: t("productDetails.delivery.address", {
          name: selectedAddress?.name,
          city: selectedAddress?.city,
          postalCode: selectedAddress?.postalCode,
        }),
      },
    };
  }, [getSelectedAddress, selectedProduct, t]);

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

  const onClickAddress = React.useCallback(() => {
    showItem(Drawers.selectAddress);
  }, [showItem]);

  const onChangeQuantity = React.useCallback((value: number) => {
    setQuantity(value);
  }, []);

  const onClickAddToCart = React.useCallback(() => {
    //Do some
  }, []);

  const onClickBuyNow = React.useCallback(() => {
    //Do some
  }, []);

  return {
    i18n,
    product: selectedProduct,
    currency,
    calculatedPrices,
    onClickAddress,
    quantity: {
      current: quantity,
      onChange: onChangeQuantity,
    },
    onClickAddToCart,
    onClickBuyNow,
  };
};
