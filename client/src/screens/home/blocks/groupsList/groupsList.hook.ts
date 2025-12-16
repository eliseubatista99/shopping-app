import { type ProductDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreHome } from "@store";
import React from "react";

type OfferGroup = {
  title: string;
  products: ProductDto[];
};

export const useGroupsListBlockHelper = () => {
  const groups = useStoreHome((state) => state.groups);
  const buyAgain = useStoreHome((state) => state.buyAgain);
  const fromSearchHistory = useStoreHome((state) => state.fromSearchHistory);

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      group: {
        title: (category: string) => t(`home.group.${category}.title`),
      },
      buyAgain: {
        title: t("home.group.buyAgain.title"),
      },
      fromHistory: {
        title: t("home.group.fromHistory.title"),
      },
    };
  }, [t]);

  const groupsList = React.useMemo(() => {
    const result: OfferGroup[] = [];

    if (buyAgain && buyAgain.length > 0) {
      result.push({
        title: i18n.buyAgain.title,
        products: buyAgain || [],
      });
    }

    if (fromSearchHistory && fromSearchHistory.length > 0) {
      result.push({
        title: i18n.fromHistory.title,
        products: fromSearchHistory || [],
      });
    }

    const mappedGroups = (groups || []).map(
      (g): OfferGroup => ({
        title: i18n.group.title(g.category),
        products: g.products || [],
      })
    );

    return [...result, ...mappedGroups];
  }, [
    buyAgain,
    fromSearchHistory,
    groups,
    i18n.buyAgain.title,
    i18n.fromHistory.title,
    i18n.group,
  ]);

  return {
    groupsList,
  };
};
