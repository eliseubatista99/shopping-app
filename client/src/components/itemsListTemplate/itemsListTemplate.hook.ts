import {
  ObjectsHelper,
  useDidMount,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { ItemsListTemplateProps } from "./itemsListTemplate";

export const useItemsListTemplateHelper = (props: ItemsListTemplateProps) => {
  const { t } = useAppTranslations();
  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const hasRequestedOrdersOnce = React.useRef<boolean>(false);

  const cachedFilters = React.useRef<object>(undefined);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

  const [items, setItems] = React.useState<unknown[]>([]);

  const i18n = React.useMemo(() => {
    return {
      error: {
        text: t("itemsListTemplate.error.message"),
        actions: {
          try: t("itemsListTemplate.error.action.try"),
        },
      },
      empty: t("itemsListTemplate.empty.message"),
    };
  }, [t]);

  const handleRequestItems = React.useCallback(async () => {
    isFetching.current = true;
    setLoading(true);

    if (currentPage.current === 0) {
      setItems([]);
    }

    const res = await props.retrieveItems(
      currentPage.current,
      10,
      cachedFilters.current
    );

    if (res.success) {
      hasMorePages.current = res.hasMorePages;
      setHasError(false);
    } else {
      setHasError(true);
    }

    setLoading(false);
    isFetching.current = false;
    hasRequestedOrdersOnce.current = true;
  }, [props]);

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (
        visible &&
        !hasError &&
        items.length > 0 &&
        !isFetching.current &&
        hasMorePages.current &&
        hasRequestedOrdersOnce.current
      ) {
        currentPage.current += 1;
        handleRequestItems();
      }
    },
    [handleRequestItems, hasError, items.length]
  );

  React.useEffect(() => {
    if (
      !ObjectsHelper.isSameObject(props.filters, cachedFilters.current) &&
      hasRequestedOrdersOnce.current
    ) {
      cachedFilters.current = props.filters;
      currentPage.current = 0;

      handleRequestItems();
    }
  }, [props.filters, handleRequestItems]);

  React.useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  useDidMount(() => {
    cachedFilters.current = props.filters;
    currentPage.current = 0;

    setItems(props.items);

    handleRequestItems();
  });

  return {
    i18n,
    items,
    loading,
    hasError,
    handleRequestItems,
    handleRequestTrigger,
  };
};
