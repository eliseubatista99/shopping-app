import { Api } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreWishlist } from "@store";
import React from "react";

export const useWishlistPageHelper = () => {
  const [loading, setLoading] = React.useState(true);
  const { fetchGetWishlist } = Api.useFetchGetWishlist();
  const setWishlistStoreState = useStoreWishlist(
    (state) => state.setWishlistStoreState
  );

  const initScreen = React.useCallback(async () => {
    setLoading(true);

    const res = await fetchGetWishlist();

    if (res.metadata.success) {
      setWishlistStoreState({ products: res.data.products });
    }

    setLoading(false);
  }, [fetchGetWishlist, setWishlistStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
