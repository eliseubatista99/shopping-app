import type { SortMode } from "@api";
import { SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import type { ProductFilters } from "@store";

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
    searchFilters: {
      value: {
        text: searchParams.get<string>(SEARCH_PARAMS.SEARCH_TEXT) ?? undefined,
        score:
          searchParams.get<number>(SEARCH_PARAMS.SEARCH_SCORE) ?? undefined,
        maxPrice:
          searchParams.get<number>(SEARCH_PARAMS.SEARCH_MAX_PRICE) ?? undefined,
        minPrice:
          searchParams.get<number>(SEARCH_PARAMS.SEARCH_MIN_PRICE) ?? undefined,
        bestSeller:
          searchParams.get<boolean>(SEARCH_PARAMS.SEARCH_BEST_SELLER) ??
          undefined,
        freeShipping:
          searchParams.get<boolean>(SEARCH_PARAMS.SEARCH_FREE_SHIPPING) ??
          undefined,
        category:
          searchParams.get<string>(SEARCH_PARAMS.SEARCH_CATEGORY) ?? undefined,
        sort: searchParams.get<SortMode>(SEARCH_PARAMS.SORT) ?? undefined,
      } as ProductFilters,
      set: (val: ProductFilters | undefined) =>
        searchParams.setMany({
          [SEARCH_PARAMS.SEARCH_TEXT]: val?.text,
          [SEARCH_PARAMS.SEARCH_SCORE]: val?.score,
          [SEARCH_PARAMS.SEARCH_MAX_PRICE]: val?.maxPrice,
          [SEARCH_PARAMS.SEARCH_MIN_PRICE]: val?.minPrice,
          [SEARCH_PARAMS.SEARCH_BEST_SELLER]: val?.bestSeller,
          [SEARCH_PARAMS.SEARCH_FREE_SHIPPING]: val?.freeShipping,
          [SEARCH_PARAMS.SEARCH_CATEGORY]: val?.category,
          [SEARCH_PARAMS.SORT]: val?.sort,
        }),
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
