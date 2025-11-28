import { Assets } from "@assets";
import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import React, { type FunctionComponent, type SVGProps } from "react";

type FooterItem = {
  path: PAGES;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text?: string;
  selected: boolean;
};

export const useAppFooterHelper = () => {
  const { goTo, currentPath } = useNavigation();
  const { numberOfProductsInBasket } = useCart();

  const items = React.useMemo((): FooterItem[] => {
    return [
      {
        path: PAGES.HOME,
        icon: Assets.Icons.Home,
        selected: currentPath === PAGES.HOME,
      },
      {
        path: PAGES.FOR_YOU,
        icon: Assets.Icons.Person,
        selected: currentPath === PAGES.FOR_YOU,
      },
      {
        path: PAGES.CART,
        icon: Assets.Icons.Basket,
        selected: currentPath === PAGES.CART,
        text: `${numberOfProductsInBasket}`,
      },
      {
        path: PAGES.SETTINGS,
        icon: Assets.Icons.Hamburger,
        selected: currentPath === PAGES.SETTINGS,
      },
    ];
  }, [currentPath, numberOfProductsInBasket]);

  const onClickItem = React.useCallback(
    (item: FooterItem) => {
      goTo({ path: item.path });
    },
    [goTo]
  );

  return {
    items,
    onClickItem,
  };
};
