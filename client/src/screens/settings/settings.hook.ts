import { useStoreAuthentication } from "@store";

export const useSettingsPageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  return {
    isAuthenticated,
  };
};
