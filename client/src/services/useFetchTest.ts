import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";

export type Person = {
  nome: string;
  idade: number;
  localidade: string;
};

export type FetchOperationOutput = Person[];

export const useFetchTest = () => {
  const fetchHook = useFetch();

  const fetch = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await fetchHook<Person[]>("http://localhost:5000/test");

    return result;
  }, [fetchHook]);

  return {
    fetch,
  };
};
