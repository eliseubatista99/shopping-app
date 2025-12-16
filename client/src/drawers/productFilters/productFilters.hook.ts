import { SortMode } from "@api";
import { ObjectsHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import { type ProductFilters } from "@store";
import React from "react";

export const useProductFiltersDrawerHelper = () => {
  const { searchFilters } = useAppSearchParams();

  const { t } = useAppTranslations();

  const [newFilters, setNewFilters] = React.useState<ProductFilters>(
    searchFilters.value || {}
  );

  const [priceError, setPriceError] = React.useState<string | undefined>();

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.productFilters.title"),
      sort: t("drawers.productFilters.sort"),
      score: t("drawers.productFilters.score"),
      freeShipping: t("drawers.productFilters.freeShipping"),
      bestSeller: t("drawers.productFilters.bestSeller"),
      price: t("drawers.productFilters.price"),
      filters: {
        sort: (sort: SortMode) => t(`global.filters.sort.${sort}`),
        price: {
          min: {
            placeholder: t("drawers.productFilters.form.price.min.placeholder"),
            errors: {
              greaterThanMax: t(
                "drawers.productFilters.form.price.min.errors.greaterThanMax"
              ),
            },
          },
          max: {
            placeholder: t("drawers.productFilters.form.price.max.placeholder"),
            errors: {
              lesserThanMin: t(
                "drawers.productFilters.form.price.max.errors.lesserThanMin"
              ),
            },
          },
        },
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

  const onClickScoreFilter = React.useCallback((value?: number) => {
    setNewFilters((prevState) => ({ ...prevState, score: value }));
  }, []);

  const handlePriceFilterChanges = React.useCallback(
    (min?: string, max?: string) => {
      const numericMinValue = min ? Number(min) : newFilters.minPrice;
      const numericMaxValue = max ? Number(max) : newFilters.maxPrice;

      if (
        newFilters.maxPrice !== undefined &&
        numericMinValue !== undefined &&
        numericMinValue > newFilters.maxPrice
      ) {
        setPriceError(i18n.filters.price.min.errors.greaterThanMax);
        return;
      }

      if (
        newFilters.minPrice !== undefined &&
        numericMaxValue !== undefined &&
        numericMaxValue < newFilters.minPrice
      ) {
        setPriceError(i18n.filters.price.max.errors.lesserThanMin);
        return;
      }

      setPriceError(undefined);

      setNewFilters((prevState) => ({
        ...prevState,
        minPrice: numericMinValue,
        maxPrice: numericMaxValue,
      }));
    },
    [
      i18n.filters.price.max.errors.lesserThanMin,
      i18n.filters.price.min.errors.greaterThanMax,
      newFilters.maxPrice,
      newFilters.minPrice,
    ]
  );

  const onChangeMinPrice = React.useCallback(
    (value?: string) => {
      handlePriceFilterChanges(value, undefined);
    },
    [handlePriceFilterChanges]
  );

  const onChangeMaxPrice = React.useCallback(
    (value?: string) => {
      handlePriceFilterChanges(undefined, value);
    },
    [handlePriceFilterChanges]
  );

  const onClickFreeShipping = React.useCallback((value: boolean) => {
    setNewFilters((prevState) => ({ ...prevState, freeShipping: value }));
  }, []);

  const onClickBestSeller = React.useCallback((value: boolean) => {
    setNewFilters((prevState) => ({ ...prevState, bestSeller: value }));
  }, []);

  const onClose = React.useCallback(() => {
    if (!ObjectsHelper.isSameObject(newFilters, searchFilters)) {
      searchFilters.set(newFilters);
    }
  }, [newFilters, searchFilters]);

  return {
    i18n,
    sortOptions,
    newFilters,
    onClickScoreFilter,
    onClickSortFilter,
    onClose,
    onClickBestSeller,
    onClickFreeShipping,
    price: {
      onChangeMinPrice,
      onChangeMaxPrice,
      priceError,
    },
  };
};
