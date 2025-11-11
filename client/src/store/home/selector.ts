import { useStoreHomeZustand } from "./homeStore";

export const useStoreHome = () => {
  const { setPartialState, ...store } = useStoreHomeZustand();

  return {
    storeHome: store,
    setPartialState: setPartialState,
  };
};
