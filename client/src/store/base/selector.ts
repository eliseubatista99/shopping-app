import type { ClientInfoDto } from "src/services";
import { useStoreBaseZustand } from "./baseStore";

export const useStoreBase = () => {
  const { setPartialState, ...store } = useStoreBaseZustand();

  return {
    storeBase: store,
    setClientInfo: (data: ClientInfoDto) => {
      setPartialState({
        client: data,
      });
    },
  };
};
