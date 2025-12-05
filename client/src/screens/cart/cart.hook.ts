import { useStoreAuthentication } from "@store";

export const useCartPageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  // const { goTo } = useNavigation();

  // const initScreen = useCallback(async () => {
  //   if (!isAuthenticated) {
  //     goTo({
  //       path: PAGES.SIGN_UP_OR_LOGIN,
  //       params: {
  //         [SEARCH_PARAMS.RETURN_PAGE]: PAGES.CART,
  //       },
  //     });
  //   }
  // }, [goTo, isAuthenticated]);

  // useDidMount(() => {
  //   initScreen();
  // });

  return {
    isAuthenticated,
  };
};
