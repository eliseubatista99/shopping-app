import type { ReviewDto, ScoreCountDto, SortMode } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ReviewsState {
  productName?: string;
  productId?: string;
  productImage?: string;
  averageScore?: number;
  reviewsCount?: number;
  scores?: ScoreCountDto[];
  reviews?: ReviewDto[];
  hasMorePages?: boolean;
  sortFilter?: SortMode;
  scoreFilter?: number;
}

const initialState: ReviewsState = {};

interface UseStoreOutput extends ReviewsState {
  setReviewsStoreState: (data: Partial<ReviewsState>) => void;
  addReviews: (data: ReviewDto[]) => void;
  setSortFilter: (sort?: SortMode) => void;
  setScoreFilter: (score?: number) => void;
}

export const useStoreReviews = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setReviewsStoreState: function (data: Partial<ReviewsState>) {
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
    setSortFilter: function (sort?: SortMode) {
      set(
        produce((state: ReviewsState) => ({ ...state, sortFilter: sort })),
        false,
        "setSortFilter"
      );
    },
    setScoreFilter: function (score?: number) {
      set(
        produce((state: ReviewsState) => ({ ...state, scoreFilter: score })),
        false,
        "setScoreFilter"
      );
    },
  }),
  "Reviews",
  createJSONStorage(() => sessionStorage)
);
