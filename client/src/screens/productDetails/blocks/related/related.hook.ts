import type { ProductDto } from "@api";
import { DRAWERS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

export const useRelatedBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();
  const { showItem } = useFeedback();
  const { goTo } = useNavigation();

  const [quantity, setQuantity] = React.useState<number>(1);

  const i18n = React.useMemo(() => {
    return {
      related: {
        title: t("productDetails.related.title"),
      },
    };
  }, [t]);

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

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
        addToHistory: true,
      });
    },
    [goTo]
  );

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
    onClickProduct,
  };
};
