import type { OrderDto, ReviewDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ForYouState {
  orders?: OrderDto[];
  favorites?: { images: string[]; count: number };
  needingReviewProduct?: {
    id: string;
    image: string;
  };
  review?: ReviewDto;
}

const initialState: ForYouState = {};

interface UseStoreOutput extends ForYouState {
  setPartialState: (data: Partial<ForYouState>) => void;
}

export const useStoreForYou = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<ForYouState>) {
      set(
        produce((state: ForYouState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "ForYou",
  createJSONStorage(() => sessionStorage)
);
