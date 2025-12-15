import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type SearchHistoryEntry = {
  id: string;
  value: string;
};

export interface SearchState {
  previousSearches?: SearchHistoryEntry[];
}

const initialState: SearchState = {
  previousSearches: [
    {
      id: "jh532",
      value: "Computer Laptop Support",
    },
    {
      id: "312dsa",
      value: "Garden Sprinkler",
    },
  ],
};

interface UseStoreOutput extends SearchState {
  setSearchStoreState: (data: Partial<SearchState>) => void;
  addSearch: (data: string) => void;
  deleteSearch: (id: string) => void;
  moveEntryToStart: (id: string) => void;
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
    addSearch: function (data: string) {
      set(
        produce((state: SearchState) => {
          const newEntry: SearchHistoryEntry = {
            id: uuidv4(),
            value: data,
          };

          return {
            ...state,
            previousSearches: [newEntry, ...(state.previousSearches || [])],
          };
        }),
        false,
        "addSearch"
      );
    },
    deleteSearch: function (id: string) {
      set(
        produce((state: SearchState) => ({
          ...state,
          previousSearches: (state.previousSearches || []).filter(
            (s) => s !== null && s !== undefined && s.id !== id
          ),
        })),
        false,
        "deleteSearch"
      );
    },
    moveEntryToStart: function (id: string) {
      set(
        produce((state: SearchState) => {
          const entry = state.previousSearches?.find((s) => s?.id === id);
          const remaining = (state.previousSearches || []).filter(
            (s) => s !== null && s !== undefined && s.id !== id
          );

          return {
            ...state,
            previousSearches: [entry, ...remaining],
          };
        }),
        false,
        "moveEntryToStart"
      );
    },
  }),
  "Search",
  createJSONStorage(() => localStorage)
);
