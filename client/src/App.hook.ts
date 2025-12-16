import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useClientInfo } from "@hooks";
import { useStoreAuthentication, useStoreClient } from "@store";

export const useAppHelper = () => {
  const { getClientInfo } = useClientInfo();

  const clientInfo = useStoreClient((state) => state.client);
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const isReady =
    (isAuthenticated && clientInfo !== undefined) || !isAuthenticated;

  useDidMount(() => {
    getClientInfo();
  });

  return {
    isReady,
  };
};
