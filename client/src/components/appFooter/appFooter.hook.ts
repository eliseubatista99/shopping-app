import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import React from "react";
import { Icons } from "src/assets/icons";

type FooterItem = {
  path: Pages;
  icon: string;
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
        icon: Icons.Home,
        selected: currentPath === Pages.home,
      },
      {
        path: Pages.forYou,
        icon: Icons.Person,
        selected: currentPath === Pages.forYou,
      },
      {
        path: Pages.basket,
        icon: Icons.Basket,
        selected: currentPath === Pages.basket,
        text: `${numberOfProductsInBasket}`,
      },
      {
        path: Pages.explore,
        icon: Icons.Hamburger,
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
