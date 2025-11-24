import type { ProductDto } from "@api";
import { DRAWERS, PAGES } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useCart } from "@hooks";
import { useStoreBase, useStoreCheckout, useStoreProduct } from "@store";
import React from "react";

export const usePurchaseBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const setCheckoutStoreState = useStoreCheckout(
    (state) => state.setPartialState
  );
  const selectedAddress = useStoreBase((state) => state.selectedAddress);
  const currency = useStoreBase((state) => state.currency);
  const { t, translateDate } = useAppTranslations();
  const { showItem } = useFeedback();
  const { addToCart } = useCart();
  const { goTo } = useNavigation();

  const [quantity, setQuantity] = React.useState<number>(1);

  const i18n = React.useMemo(() => {
    const { extenseDate } = translateDate(
      selectedProduct?.estimatedDeliveryDate || ""
    );

    return {
      actions: {
        addToCard: t("global.actions.addToCart.single"),
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
  }, [
    selectedAddress?.city,
    selectedAddress?.name,
    selectedAddress?.postalCode,
    selectedProduct?.estimatedDeliveryDate,
    selectedProduct?.shippingCost,
    t,
    translateDate,
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

  const onClickAddress = React.useCallback(() => {
    showItem(DRAWERS.SELECT_ADDRESS);
  }, [showItem]);

  const onChangeQuantity = React.useCallback((value: number) => {
    setQuantity(value);
  }, []);

  const onClickAddToCart = React.useCallback(
    (product: ProductDto) => {
      addToCart([product.id]);
    },
    [addToCart]
  );

  const onClickBuyNow = React.useCallback(() => {
    if (selectedProduct) {
      setCheckoutStoreState({
        products: [selectedProduct],
      });
      goTo({
        path: PAGES.CHECKOUT,
        addToHistory: true,
      });
    }
  }, [goTo, selectedProduct, setCheckoutStoreState]);

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
