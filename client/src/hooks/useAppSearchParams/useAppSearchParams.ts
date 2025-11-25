import { SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

export const useAppSearchParams = () => {
  const { searchParams } = useNavigation();

  return {
    productId: {
      value: searchParams.get<string>(SEARCH_PARAMS.PRODUCT_ID) ?? undefined,
    },
    searchText: {
      value: searchParams.get<string>(SEARCH_PARAMS.SEARCH_TEXT) ?? undefined,
    },
    reviewId: {
      value: searchParams.get<string>(SEARCH_PARAMS.REVIEW_ID) ?? undefined,
    },
  };
};
