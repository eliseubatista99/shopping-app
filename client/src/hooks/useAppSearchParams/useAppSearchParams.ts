import { SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

export const useAppSearchParams = () => {
  const { searchParams } = useNavigation();

  return {
    allParams: searchParams.getAll(),
    productId: {
      value: searchParams.get<string>(SEARCH_PARAMS.PRODUCT_ID) ?? undefined,
    },
    searchText: {
      value: searchParams.get<string>(SEARCH_PARAMS.SEARCH_TEXT) ?? undefined,
      set: (val: string) => searchParams.set(SEARCH_PARAMS.SEARCH_TEXT, val),
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
