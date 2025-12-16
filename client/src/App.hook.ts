import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useClientInfo } from "@hooks";
import { useStoreAuthentication, useStoreBase } from "@store";

export const useAppHelper = () => {
  const { getClientInfo } = useClientInfo();

  const clientInfo = useStoreBase((state) => state.client);
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const isReady =
    (isAuthenticated && clientInfo !== undefined) || !isAuthenticated;

  useDidMount(() => {
    getClientInfo();
  });

  // console.log("ZAU", { isReady, isAuthenticated, clientInfo });

  return {
    isReady,
  };
};
