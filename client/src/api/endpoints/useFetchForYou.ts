import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, OrderDto, ReviewDto } from "../types";

export type ForYouOutputDto = {
  orders: OrderDto[];
  favoritesImages: string[];
  favoriteCount: number;
  needingReviewProductId: string;
  needingReviewProductImage: string;
  review: ReviewDto;
};

export const GetForYou = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<ForYouOutputDto>>(
      `${ApiConfigs.endpoint}/ForYou`
    );

    return result;
  }, [get]);

  return {
    fetchForYou: fetch,
  };
};
