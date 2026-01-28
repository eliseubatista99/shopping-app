import type { ReviewDto, ScoreCountDto, SortMode } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type ReviewsFilters = {
  sortFilter?: SortMode;
  scoreFilter?: number;
};

export interface ReviewsState {
  productName?: string | null;
  productId?: string | null;
  reviewerId?: string | null;
  productImage?: string | null;
  averageScore?: number | null;
  reviewsCount?: number | null;
  scores?: ScoreCountDto[] | null;
  reviews?: ReviewDto[] | null;
  hasMorePages?: boolean | null;
  filters?: ReviewsFilters;
}

const initialState: ReviewsState = {};

interface UseStoreOutput extends ReviewsState {
  setReviewsStoreState: (data: Partial<ReviewsState>) => void;
  addReviews: (data: ReviewDto[]) => void;
  setFilters: (data: Partial<ReviewsFilters>) => void;
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
    setFilters: function (data: Partial<ReviewsFilters>) {
      set(
        produce((state: ReviewsState) => ({
          ...state,
          filters: {
            ...state.filters,
            ...data,
          },
        })),
        false,
        "setFilters"
      );
    },
  }),
  "Reviews",
  createJSONStorage(() => sessionStorage)
);
