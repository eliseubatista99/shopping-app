import type { ClientInfoDto } from "@api";
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
