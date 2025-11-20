import { Assets } from "@assets";
import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import React, { type FunctionComponent, type SVGProps } from "react";

type FooterItem = {
  path: Pages;
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
        path: Pages.home,
        icon: Assets.Icons.Home,
        selected: currentPath === Pages.home,
      },
      {
        path: Pages.forYou,
        icon: Assets.Icons.Person,
        selected: currentPath === Pages.forYou,
      },
      {
        path: Pages.basket,
        icon: Assets.Icons.Basket,
        selected: currentPath === Pages.basket,
        text: `${numberOfProductsInBasket}`,
      },
      {
        path: Pages.explore,
        icon: Assets.Icons.Hamburger,
        selected: currentPath === Pages.explore,
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
