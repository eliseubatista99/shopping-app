import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface SearchState {
  previousSearches?: string[];
}

const initialState: SearchState = {
  previousSearches: ["Computer Laptop Support", "Garden Sprinkler"],
};

interface UseStoreOutput extends SearchState {
  setSearchStoreState: (data: Partial<SearchState>) => void;
}

export const useStoreSearch = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setSearchStoreState: function (data: Partial<SearchState>) {
      set(
        produce((state: SearchState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Search",
  createJSONStorage(() => sessionStorage)
);
