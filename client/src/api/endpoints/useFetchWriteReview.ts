import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  WriteReviewOperationInputDto,
  WriteReviewResponseDto,
} from "../models";

export const WriteReview = () => {
  const { post } = useFetchWithAuth<WriteReviewResponseDto>({
    endpoint: "WriteReview",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: WriteReviewOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchWriteReview: fetch,
  };
};
