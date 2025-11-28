import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { OrderDto, ReviewDto } from "../types";

export type ForYouOutputDto = {
  orders: OrderDto[];
  favoritesImages: string[];
  favoriteCount: number;
  needingReviewProductId: string;
  needingReviewProductImage: string;
  review: ReviewDto;
};

export const GetForYou = () => {
  const { get } = useAppFetch<ForYouOutputDto>("ForYou");

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchForYou: fetch,
  };
};
