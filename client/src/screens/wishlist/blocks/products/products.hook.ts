import { Api, type ProductDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useCart } from "@hooks";
import { useStoreWishlist } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();

  const { fetchGetWishlist } = Api.GetWishlist();
  const { fetchRemoveFromWishlist } = Api.RemoveFromWishlist();
  const products = useStoreWishlist((state) => state.products);
  const addProducts = useStoreWishlist((state) => state.addProducts);
  const setWishlistStoreState = useStoreWishlist(
    (state) => state.setWishlistStoreState
  );
  const { goTo } = useNavigation();
  const { addToCart } = useCart();

  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("wishlist.products.title"),
    };
  }, [t]);

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number) => {
      const res = await fetchGetWishlist({
        page: currentPage,
        pageCount: pageSize,
      });

      if (res.metadata.success) {
        if (currentPage < 1) {
          setWishlistStoreState({
            products: res.data.products,
          });
        } else {
          addProducts(res.data.products);
        }
      }

      return {
        success: res.metadata.success,
        hasMorePages: res.data?.hasMorePages,
      };
    },
    [addProducts, fetchGetWishlist, setWishlistStoreState]
  );

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
      });
    },
    [goTo]
  );

  const onClickAddToCart = React.useCallback(
    (product: ProductDto) => {
      addToCart([product.id || ""]);
    },
    [addToCart]
  );

  const onClickWishlist = React.useCallback(
    async (product: ProductDto) => {
      setLoading(true);
      const res = await fetchRemoveFromWishlist({
        productId: product.id || "",
      });

      if (res.metadata.success) {
        setWishlistStoreState({ products: res.data.updatedWishlist });
      }
      setLoading(false);
    },
    [fetchRemoveFromWishlist, setWishlistStoreState]
  );

  return {
    i18n,
    loading,
    products: products || [],
    onClickProduct,
    onClickAddToCart,
    onClickWishlist,
    retrieveItems,
  };
};
