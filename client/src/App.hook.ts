export const useAppHelper = () => {
  // const { currentPath, goTo } = useNavigation();
  // const appInitialized = React.useRef<boolean>(false);

  // const [users, setUsers] = React.useState<Person[]>([]);

  // const { fetch: fetchTest } = useFetchTest();

  // const handleInitialPath = React.useCallback(() => {
  //   if (currentPath !== Pages.splash) {
  //     replaceHistory([]);
  //     goTo(Pages.splash, false);
  //   }
  // }, [currentPath, goTo, replaceHistory]);

  // React.useEffect(() => {
  //   if (!appInitialized.current) {
  //     handleInitialPath();

  //     appInitialized.current = true;
  //   }
  // }, [currentPath, goTo, handleInitialPath, replaceHistory]);

  // const initApp = React.useCallback(async () => {
  //   const res = await fetchTest();
  //   setUsers(res);
  // }, [fetchTest]);

  // useDidMount(() => {
  //   initApp();
  // });

  return {
    // currentPath,
  };
};
