import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { useFetchTest, type Person } from "./services";

export const App = () => {
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
      {users.map((u) => (
        <p>{u.nome}</p>
      ))}
    </>
  );
};

export default App;
