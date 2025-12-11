import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useClientInfo } from "@hooks";
import { useStoreBase } from "@store";

export const useAppHelper = () => {
  const { getClientInfo } = useClientInfo();
  const clientInfo = useStoreBase((state) => state.client);

  useDidMount(() => {
    getClientInfo();
  });

  return {
    isLoading: clientInfo === undefined,
  };
};
