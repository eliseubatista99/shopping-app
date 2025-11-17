import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface SearchState {
  searchText?: string;
  previousSearches?: string[];
  selectedProduct?: string;
}

const initialState: SearchState = {
  previousSearches: ["Computer Laptop Support", "Garden Sprinkler"],
};

interface UseStoreOutput extends SearchState {
  setPartialState: (data: Partial<SearchState>) => void;
}

export const useStoreSearch = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<SearchState>) {
      set(
        produce((state: SearchState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Search",
  createJSONStorage(() => localStorage)
);
