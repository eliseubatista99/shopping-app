import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAuthentication, useClientInfo } from "@hooks";
import { useStoreAuthentication, useStoreClient } from "@store";
import { useCallback, useRef, useState } from "react";

export const useAppHelper = () => {
  const { getClientInfo } = useClientInfo();
  const { refreshToken } = useAuthentication();

  const clientInfo = useStoreClient((state) => state.client);
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const refreshedRef = useRef(false);
  const [refreshed, setRefreshed] = useState(false);

  const init = useCallback(async () => {
    if (refreshedRef.current) {
      return;
    }

    refreshedRef.current = true;

    const res = await refreshToken();

    if (res.success) {
      await getClientInfo();
    }

    setRefreshed(true);

    refreshedRef.current = false;
  }, [getClientInfo, refreshToken]);

  const isReady =
    refreshed &&
    ((isAuthenticated && clientInfo !== undefined) || !isAuthenticated);

  useDidMount(() => {
    init();
  });

  return {
    isReady,
  };
};
