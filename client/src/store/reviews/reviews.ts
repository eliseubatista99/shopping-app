import type { ReviewDto, ScoreCountDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ReviewsState {
  productName?: string;
  productId?: string;
  averageScore?: number;
  reviewsCount?: number;
  scores?: ScoreCountDto[];
  reviews?: ReviewDto[];
  hasMorePages?: boolean;
}

const initialState: ReviewsState = {};

interface UseStoreOutput extends ReviewsState {
  setPartialState: (data: Partial<ReviewsState>) => void;
  addReviews: (data: ReviewDto[]) => void;
}

export const useStoreReviews = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<ReviewsState>) {
      set(
        produce((state: ReviewsState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    addReviews: function (data: ReviewDto[]) {
      set(
        produce((state: ReviewsState) => {
          state.reviews = [...(state.reviews || []), ...data];
        }),
        false,
        "addReviews"
      );
    },
  }),
  "Reviews",
  createJSONStorage(() => sessionStorage)
);
