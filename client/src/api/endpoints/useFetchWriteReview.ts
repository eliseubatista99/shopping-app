import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput } from "../types";

export type WriteReviewInputDto = {
  reviewerId: string;
  productId: string;
  score: number;
  title: string;
  description: string;
};

export const WriteReview = () => {
  const { post } = useFetch();

  const fetch = useCallback(
    async (input: WriteReviewInputDto) => {
      const result = await post<ApiOutput<void>>(
        `${ApiConfigs.endpoint}/WriteReview`,
        {
          ...input,
        }
      );

      return result;
    },
    [post]
  );

  return {
    fetchWriteReview: fetch,
  };
};
