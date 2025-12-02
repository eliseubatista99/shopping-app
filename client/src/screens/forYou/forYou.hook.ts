import { Api } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication, useStoreForYou } from "@store";
import React from "react";

export const useForYouPageHelper = () => {
  const { fetchForYou } = Api.GetForYou();

  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const setForYouStoreState = useStoreForYou(
    (state) => state.setForYouStoreState
  );
  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);
    const res = await fetchForYou();

    if (res.metadata.success) {
      setForYouStoreState({
        orders: res.data.orders,
        favorites: {
          images: res.data.favoritesImages || [],
          count: res.data.favoritesImages?.length,
        },
        needingReviewProduct: {
          id: res.data.needingReviewProductId,
          image: res.data.needingReviewProductImage,
        },
        review: res.data.review,
      });
      setLoading(false);
    }
  }, [fetchForYou, setForYouStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
    isAuthenticated,
  };
};
