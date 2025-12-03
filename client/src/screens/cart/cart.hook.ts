import { useStoreAuthentication } from "@store";

export const useCartPageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  // const [loading, setLoading] = React.useState(true);

  // const { getCart } = useCart();

  // const initScreen = React.useCallback(async () => {
  //   setLoading(true);
  //   await getCart();
  //   setLoading(false);
  // }, [getCart]);

  // useDidMount(() => {
  //   initScreen();
  // });

  return {
    // loading,
    isAuthenticated,
  };
};
