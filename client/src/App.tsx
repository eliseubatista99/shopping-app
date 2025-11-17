import { useFetchTest, type Person } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { OverlaySearch } from "@overlays";
import React from "react";
import { useAppHelper } from "./App.hook";

export const App = () => {
  useAppHelper();
  const [users, setUsers] = React.useState<Person[]>([]);

  const { fetch: fetchTest } = useFetchTest();

  const initApp = React.useCallback(async () => {
    const res = await fetchTest();
    setUsers(res);
  }, [fetchTest]);

  useDidMount(() => {
    initApp();
  });

  console.log("RESULT", users);

  return (
    <>
      <OverlaySearch />
    </>
  );
};

export default App;
