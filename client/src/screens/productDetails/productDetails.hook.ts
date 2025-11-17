import { useFetchProductDetail, type ProductDetailDto } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreSearch } from "@store";
import React from "react";

export const useProductDetailsPageHelper = () => {
  const isFetching = React.useRef(false);
  const selectedProductId = useStoreSearch((state) => state.selectedProduct);
  const { fetch: fetchProductDetail } = useFetchProductDetail();
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);

  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState<ProductDetailDto | undefined>(
    undefined
  );

  const i18n = React.useMemo(() => {
    return {
      tags: {
        bestSeller: t("product.tag.bestSeller"),
        freeShipping: t("product.tag.freeShipping"),
      },
      buttons: {
        addToCart: t("product.actions.addToCart"),
      },
    };
  }, [t]);

  const initScreen = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    const res = await fetchProductDetail({
      productId: selectedProductId || "",
    });

    setProduct(res.product);

    isFetching.current = false;
    setLoading(false);
  }, [fetchProductDetail, selectedProductId]);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
    product,
    loading,
    currency,
  };
};
