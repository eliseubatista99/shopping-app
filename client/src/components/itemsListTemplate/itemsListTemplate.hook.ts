import {
  ObjectsHelper,
  useDidMount,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ItemsListTemplateProps } from "./itemsListTemplate";

export const useItemsListTemplateHelper = ({
  retrieveItems,
  filters,
}: ItemsListTemplateProps) => {
  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const hasRequestedOrdersOnce = React.useRef<boolean>(false);

  const cachedFilters = React.useRef<object>(undefined);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

  const handleRequestItems = React.useCallback(async () => {
    isFetching.current = true;
    setLoading(true);

    const res = await retrieveItems(
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
  }, [retrieveItems]);

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (
        visible &&
        !isFetching.current &&
        hasMorePages.current &&
        hasRequestedOrdersOnce.current
      ) {
        currentPage.current += 1;
        handleRequestItems();
      }
    },
    [handleRequestItems]
  );

  React.useEffect(() => {
    if (
      !ObjectsHelper.isSameObject(filters, cachedFilters.current) &&
      hasRequestedOrdersOnce.current
    ) {
      cachedFilters.current = filters;
      currentPage.current = 0;

      handleRequestItems();
    }
  }, [filters, handleRequestItems]);

  useDidMount(() => {
    cachedFilters.current = filters;
    currentPage.current = 0;

    handleRequestItems();
  });

  return {
    loading,
    hasError,
    handleRequestTrigger,
  };
};
