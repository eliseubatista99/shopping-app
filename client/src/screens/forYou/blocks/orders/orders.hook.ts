import type { OrderDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreForYou } from "@store";
import React from "react";

export const useOrdersBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const orders = useStoreForYou((state) => state.orders || []);

  const i18n = React.useMemo(() => {
    return {
      title: t("forYou.orders.title"),
      seeAll: t("global.actions.seeAll"),
    };
  }, [t]);

  const onClickOrder = React.useCallback(
    (order: OrderDto) => {
      goTo({
        path: PAGES.ORDER_DETAILS,
        params: {
          [SEARCH_PARAMS.ORDER_ID]: order.id,
        },
      });
    },
    [goTo]
  );

  const onClickSeeAll = React.useCallback(() => {
    goTo({
      path: PAGES.ORDERS,
    });
  }, [goTo]);

  return {
    i18n,
    onClickSeeAll,
    onClickOrder,
    orders,
  };
};
