import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useStoreHome } from "@store";
import { useMemo } from "react";

export const useBannersBlockHelper = () => {
  const { goTo } = useNavigation();
  const banners = useStoreHome((state) => state.banners);

  const mappedBanners = useMemo(() => {
    return banners?.map((b) => ({
      ...b,
      onClick: () => {
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_CATEGORY]: b.category,
          },
        });
      },
    }));
  }, [banners, goTo]);

  return {
    banners: mappedBanners,
  };
};
