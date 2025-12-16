import { SortMode } from "@api";
import { ObjectsHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import { type ProductFilters } from "@store";
import React from "react";

export const useProductFiltersDrawerHelper = () => {
  const searchParams = useAppSearchParams();

  const storeFilters = React.useMemo(
    (): ProductFilters => ({
      text: searchParams.searchText.value,
      score: searchParams.searchScore.value,
      maxPrice: searchParams.searchMaxPrice.value,
      minPrice: searchParams.searchMinPrice.value,
      bestSeller: searchParams.searchBestSeller.value,
      freeShipping: searchParams.searchFreeShipping.value,
      category: searchParams.searchCategory.value,
      sort: searchParams.sort.value,
    }),
    [
      searchParams.searchBestSeller.value,
      searchParams.searchCategory.value,
      searchParams.searchFreeShipping.value,
      searchParams.searchMaxPrice.value,
      searchParams.searchMinPrice.value,
      searchParams.searchScore.value,
      searchParams.searchText.value,
      searchParams.sort.value,
    ]
  );

  const { t } = useAppTranslations();

  const [newFilters, setNewFilters] = React.useState<ProductFilters>(
    storeFilters || {}
  );

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.productFilters.title"),
      sort: t("drawers.productFilters.sort"),
      score: t("drawers.productFilters.score"),
      filters: {
        sort: (sort: SortMode) => t(`global.filters.sort.${sort}`),
      },
    };
  }, [t]);

  const sortOptions = React.useMemo(() => {
    return [
      {
        option: SortMode.LowToHighPrice,
        isSelected: newFilters.sort === SortMode.LowToHighPrice,
        text: i18n.filters.sort(SortMode.LowToHighPrice),
      },
      {
        option: SortMode.HighToLowPrice,
        isSelected: newFilters.sort === SortMode.HighToLowPrice,
        text: i18n.filters.sort(SortMode.HighToLowPrice),
      },
      {
        option: SortMode.LowToHighScore,
        isSelected: newFilters.sort === SortMode.LowToHighScore,
        text: i18n.filters.sort(SortMode.LowToHighScore),
      },
      {
        option: SortMode.HightToLowScore,
        isSelected: newFilters.sort === SortMode.HightToLowScore,
        text: i18n.filters.sort(SortMode.HightToLowScore),
      },
      {
        option: SortMode.OldToNew,
        isSelected: newFilters.sort === SortMode.OldToNew,
        text: i18n.filters.sort(SortMode.OldToNew),
      },
      {
        option: SortMode.NewToOld,
        isSelected: newFilters.sort === SortMode.NewToOld,
        text: i18n.filters.sort(SortMode.NewToOld),
      },
    ];
  }, [i18n.filters, newFilters.sort]);

  const onClickSortFilter = React.useCallback(
    (value: SortMode) => {
      if (newFilters.sort === value) {
        setNewFilters((prevState) => ({ ...prevState, sort: undefined }));
      } else {
        setNewFilters((prevState) => ({ ...prevState, sort: value }));
      }
    },
    [newFilters.sort]
  );

  const onClickScoreFilter = React.useCallback((value: number) => {
    setNewFilters((prevState) => ({ ...prevState, score: value }));
  }, []);

  const onClose = React.useCallback(() => {
    if (!ObjectsHelper.isSameObject(newFilters, storeFilters)) {
      searchParams.searchScore.set(newFilters.score);
      searchParams.searchMaxPrice.set(newFilters.maxPrice);
      searchParams.searchMinPrice.set(newFilters.minPrice);
      searchParams.searchBestSeller.set(newFilters.bestSeller);
      searchParams.searchFreeShipping.set(newFilters.freeShipping);
      searchParams.searchCategory.set(newFilters.category);
      searchParams.sort.set(newFilters.sort);
    }
  }, [
    newFilters,
    searchParams.searchBestSeller,
    searchParams.searchCategory,
    searchParams.searchFreeShipping,
    searchParams.searchMaxPrice,
    searchParams.searchMinPrice,
    searchParams.searchScore,
    searchParams.sort,
    storeFilters,
  ]);

  return {
    i18n,
    sortOptions,
    newFilters,
    onClickScoreFilter,
    onClickSortFilter,
    onClose,
  };
};
