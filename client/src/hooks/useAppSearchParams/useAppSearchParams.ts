import type { SortMode } from "@api";
import { SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

export const useAppSearchParams = () => {
  const { searchParams } = useNavigation();

  return {
    allParams: {
      value: searchParams.getAll(),
      clear: () => searchParams.removeAll(),
    },
    productId: {
      value: searchParams.get<string>(SEARCH_PARAMS.PRODUCT_ID) ?? undefined,
    },
    searchText: {
      value: searchParams.get<string>(SEARCH_PARAMS.SEARCH_TEXT) ?? undefined,
      set: (val: string | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_TEXT, val),
    },
    searchScore: {
      value: searchParams.get<number>(SEARCH_PARAMS.SEARCH_SCORE) ?? undefined,
      set: (val: number | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_SCORE, val),
    },
    searchMaxPrice: {
      value:
        searchParams.get<number>(SEARCH_PARAMS.SEARCH_MAX_PRICE) ?? undefined,
      set: (val: number | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_MAX_PRICE, val),
    },
    searchMinPrice: {
      value:
        searchParams.get<number>(SEARCH_PARAMS.SEARCH_MIN_PRICE) ?? undefined,
      set: (val: number | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_MIN_PRICE, val),
    },
    searchBestSeller: {
      value:
        searchParams.get<boolean>(SEARCH_PARAMS.SEARCH_BEST_SELLER) ??
        undefined,
      set: (val: boolean | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_BEST_SELLER, val),
    },
    searchFreeShipping: {
      value:
        searchParams.get<boolean>(SEARCH_PARAMS.SEARCH_FREE_SHIPPING) ??
        undefined,
      set: (val: boolean | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_FREE_SHIPPING, val),
    },
    searchCategory: {
      value:
        searchParams.get<string>(SEARCH_PARAMS.SEARCH_CATEGORY) ?? undefined,
      set: (val: string | undefined) =>
        searchParams.set(SEARCH_PARAMS.SEARCH_CATEGORY, val),
    },
    sort: {
      value: searchParams.get<SortMode>(SEARCH_PARAMS.SORT) ?? undefined,
      set: (val: SortMode | undefined) =>
        searchParams.set(SEARCH_PARAMS.SORT, val),
    },
    reviewId: {
      value: searchParams.get<string>(SEARCH_PARAMS.REVIEW_ID) ?? undefined,
    },
    orderId: {
      value: searchParams.get<string>(SEARCH_PARAMS.ORDER_ID) ?? undefined,
    },
    returnPage: {
      value: searchParams.get<string>(SEARCH_PARAMS.RETURN_PAGE) ?? undefined,
    },
  };
};
