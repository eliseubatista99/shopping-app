import { Api } from "@api";
import {
  useStoreAddresses,
  useStoreBase,
  useStoreCart,
  useStorePaymentMethods,
} from "@store";
import { useCallback } from "react";

export const useClientInfo = () => {
  const clientInfo = useStoreBase((state) => state.client);
  const setBaseStoreState = useStoreBase((state) => state.setBaseStoreState);
  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );
  const setAddresses = useStoreAddresses((state) => state.setAddresses);
  const setCartCount = useStoreCart((state) => state.setCartCount);

  const { fetchClientInfo } = Api.GetClientInfo();

  const getClientInfo = useCallback(async () => {
    if (clientInfo) {
      return clientInfo;
    }

    const res = await fetchClientInfo();

    if (res.metadata.success) {
      setBaseStoreState({
        client: res.data.client,
      });

      setAddresses(res.data.client.addresses || []);
      setPaymentMethods(res.data.client.paymentMethods || []);

      setCartCount(res.data.itemsInCart || 0);

      return res.data.client;
    } else {
      return undefined;
    }
  }, [
    clientInfo,
    fetchClientInfo,
    setAddresses,
    setBaseStoreState,
    setCartCount,
    setPaymentMethods,
  ]);

  return {
    getClientInfo,
  };
};
