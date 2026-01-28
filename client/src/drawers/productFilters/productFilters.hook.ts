import { type SortMode } from "@api";
import { ObjectsHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import { type ProductFilters } from "@store";
import React from "react";

export const useProductFiltersDrawerHelper = () => {
  const { searchFilters } = useAppSearchParams();

  const { t } = useAppTranslations();

  const [newFilters, setNewFilters] = React.useState<ProductFilters>({
    ...searchFilters.value,
  });

  const cachedParamFilters = React.useRef<ProductFilters | undefined>({
    ...searchFilters.value,
  });
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
        option: "LowToHighPrice" as SortMode,
        isSelected: newFilters.sort === "LowToHighPrice",
        text: i18n.filters.sort("LowToHighPrice"),
      },
      {
        option: "HighToLowPrice" as SortMode,
        isSelected: newFilters.sort === "HighToLowPrice",
        text: i18n.filters.sort("HighToLowPrice"),
      },
      {
        option: "LowToHighScore" as SortMode,
        isSelected: newFilters.sort === "LowToHighScore",
        text: i18n.filters.sort("LowToHighScore"),
      },
      {
        option: "HightToLowScore" as SortMode,
        isSelected: newFilters.sort === "HightToLowScore",
        text: i18n.filters.sort("HightToLowScore"),
      },
      {
        option: "OldToNew" as SortMode,
        isSelected: newFilters.sort === "OldToNew",
        text: i18n.filters.sort("OldToNew"),
      },
      {
        option: "NewToOld" as SortMode,
        isSelected: newFilters.sort === "NewToOld",
        text: i18n.filters.sort("NewToOld"),
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
    (min?: number, max?: number) => {
      if (max !== undefined && min !== undefined && min > max) {
        setPriceError(i18n.filters.price.min.errors.greaterThanMax);
        return;
      }

      if (min !== undefined && max !== undefined && max < min) {
        setPriceError(i18n.filters.price.max.errors.lesserThanMin);
        return;
      }

      setPriceError(undefined);

      setNewFilters((prevState) => ({
        ...prevState,
        minPrice: min,
        maxPrice: max,
      }));
    },
    [
      i18n.filters.price.max.errors.lesserThanMin,
      i18n.filters.price.min.errors.greaterThanMax,
    ]
  );

  const onChangeMinPrice = React.useCallback(
    (value?: string) => {
      const numericMinValue = value ? Number(value) : undefined;

      handlePriceFilterChanges(numericMinValue, newFilters.maxPrice);
    },
    [handlePriceFilterChanges, newFilters.maxPrice]
  );

  const onChangeMaxPrice = React.useCallback(
    (value?: string) => {
      const numericMaxValue = value ? Number(value) : undefined;

      handlePriceFilterChanges(newFilters.minPrice, numericMaxValue);
    },
    [handlePriceFilterChanges, newFilters.minPrice]
  );

  const onClickFreeShipping = React.useCallback((value: boolean) => {
    setNewFilters((prevState) => ({
      ...prevState,
      freeShipping: value || undefined,
    }));
  }, []);

  const onClickBestSeller = React.useCallback((value: boolean) => {
    setNewFilters((prevState) => ({
      ...prevState,
      bestSeller: value || undefined,
    }));
  }, []);

  const onClose = React.useCallback(() => {
    if (!ObjectsHelper.isSameObject(newFilters, searchFilters)) {
      searchFilters.set(newFilters);
    }
  }, [newFilters, searchFilters]);

  React.useEffect(() => {
    if (
      !ObjectsHelper.isSameObject(
        cachedParamFilters.current,
        searchFilters.value
      )
    ) {
      cachedParamFilters.current = searchFilters.value;
      setNewFilters({ ...cachedParamFilters.current });
    }
  }, [searchFilters.value]);

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
