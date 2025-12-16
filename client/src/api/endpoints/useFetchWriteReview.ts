import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";

export type WriteReviewInputDto = {
  reviewerId: string;
  productId: string;
  score: number;
  title: string;
  description: string;
};

export const WriteReview = () => {
  const { post } = useFetchWithAuth<void>({
    endpoint: "WriteReview",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: WriteReviewInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchWriteReview: fetch,
  };
};
