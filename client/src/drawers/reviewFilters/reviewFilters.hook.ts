import { SortMode } from "@api";
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
        option: SortMode.LowToHighPrice,
        isSelected: sortFilter === SortMode.LowToHighPrice,
        text: i18n.filters.sort(SortMode.LowToHighPrice),
      },
      {
        option: SortMode.HighToLowPrice,
        isSelected: sortFilter === SortMode.HighToLowPrice,
        text: i18n.filters.sort(SortMode.HighToLowPrice),
      },
      {
        option: SortMode.LowToHighScore,
        isSelected: sortFilter === SortMode.LowToHighScore,
        text: i18n.filters.sort(SortMode.LowToHighScore),
      },
      {
        option: SortMode.HightToLowScore,
        isSelected: sortFilter === SortMode.HightToLowScore,
        text: i18n.filters.sort(SortMode.HightToLowScore),
      },
      {
        option: SortMode.OldToNew,
        isSelected: sortFilter === SortMode.OldToNew,
        text: i18n.filters.sort(SortMode.OldToNew),
      },
      {
        option: SortMode.NewToOld,
        isSelected: sortFilter === SortMode.NewToOld,
        text: i18n.filters.sort(SortMode.NewToOld),
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
