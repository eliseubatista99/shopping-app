import { type SortMode } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useReviewFiltersDrawerHelper = () => {
  const setStoreFilters = useStoreReviews((state) => state.setFilters);
  const { t } = useAppTranslations();

  const [sortFilter, setSortFilter] = React.useState<SortMode | undefined>(
    undefined
  );
  const [scoreFilter, setScoreFilter] = React.useState<number>(0);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.reviewFilters.title"),
      sort: t("drawers.reviewFilters.sort"),
      score: t("drawers.reviewFilters.score"),
      filters: {
        sort: (sort: SortMode) => t(`global.filters.sort.${sort}`),
      },
    };
  }, [t]);

  const sortOptions = React.useMemo(() => {
    return [
      {
        option: "LowToHighPrice" as SortMode,
        isSelected: sortFilter === "LowToHighPrice",
        text: i18n.filters.sort("LowToHighPrice"),
      },
      {
        option: "HighToLowPrice" as SortMode,
        isSelected: sortFilter === "HighToLowPrice",
        text: i18n.filters.sort("HighToLowPrice"),
      },
      {
        option: "LowToHighScore" as SortMode,
        isSelected: sortFilter === "LowToHighScore",
        text: i18n.filters.sort("LowToHighScore"),
      },
      {
        option: "HightToLowScore" as SortMode,
        isSelected: sortFilter === "HightToLowScore",
        text: i18n.filters.sort("HightToLowScore"),
      },
      {
        option: "OldToNew" as SortMode,
        isSelected: sortFilter === "OldToNew",
        text: i18n.filters.sort("OldToNew"),
      },
      {
        option: "NewToOld" as SortMode,
        isSelected: sortFilter === "NewToOld",
        text: i18n.filters.sort("NewToOld"),
      },
    ];
  }, [i18n.filters, sortFilter]);

  const onClickSortFilter = React.useCallback(
    (value: SortMode) => {
      if (sortFilter === value) {
        setSortFilter(undefined);
      } else {
        setSortFilter(value);
      }
    },
    [sortFilter]
  );

  const onClickScoreFilter = React.useCallback((value?: number) => {
    setScoreFilter(value || 0);
  }, []);

  const onClose = React.useCallback(() => {
    setStoreFilters({ scoreFilter, sortFilter });
  }, [scoreFilter, setStoreFilters, sortFilter]);

  return {
    i18n,
    sortOptions,
    selectedScoreFilter: scoreFilter,
    onClickSortFilter,
    onClickScoreFilter,
    onClose,
  };
};
