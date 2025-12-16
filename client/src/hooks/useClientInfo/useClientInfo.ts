import { Api } from "@api";
import {
  useStoreAddresses,
  useStoreCart,
  useStoreClient,
  useStorePaymentMethods,
} from "@store";
import { useCallback } from "react";

export const useClientInfo = () => {
  const clientInfo = useStoreClient((state) => state.client);
  const setClientStoreState = useStoreClient(
    (state) => state.setClientStoreState
  );
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
      setClientStoreState({
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
    setCartCount,
    setClientStoreState,
    setPaymentMethods,
  ]);

  return {
    getClientInfo,
  };
};
