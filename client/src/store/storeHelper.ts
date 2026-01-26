import {
  create,
  type StateCreator,
  type StoreMutatorIdentifier,
} from "zustand";
import { devtools, persist, type PersistStorage } from "zustand/middleware";

export class StoreHelper {
  static createStore = <
    T,
    Mos extends [StoreMutatorIdentifier, unknown][] = [],
  >(
    innerStore: StateCreator<
      T,
      [["zustand/persist", unknown], ["zustand/devtools", never]],
      Mos
    >,
    storeName: string,
    storage?: PersistStorage<unknown>,
  ) =>
    create<T>()(
      devtools(
        persist((set, get, api) => innerStore(set, get, api), {
          name: storeName,
          storage,
        }),
        { name: storeName },
      ),
    );
}
