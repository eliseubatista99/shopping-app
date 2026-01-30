import { PAGES, SEARCH_PARAMS } from "@constants";
import { useStoreHome } from "@store";
import { useMemo } from "react";
import { useAppNavigation } from "../../../../hooks";

export const useBannersBlockHelper = () => {
  const { goTo } = useAppNavigation();
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
          addToHistory: true,
        });
      },
    }));
  }, [banners, goTo]);

  return {
    banners: mappedBanners,
  };
};
