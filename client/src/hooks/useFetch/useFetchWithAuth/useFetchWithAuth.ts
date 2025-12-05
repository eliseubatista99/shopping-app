import { useCallback } from "react";
import { useAuthentication } from "../../useAuthentication";
import { useFetchNoAuth } from "../useFetchCommon";

type FetchWithAuthInput = {
  endpoint: string;
};

type TIn = Record<string, unknown>;

export const useFetchWithAuth = <TOut>({ endpoint }: FetchWithAuthInput) => {
  const { isTokenExpired, refreshToken } = useAuthentication();
  const {
    get: httpGet,
    post: httpPost,
    delete: httpDelete,
    patch: httpPatch,
  } = useFetchNoAuth<TOut>({
    endpoint,
  });

  const runPreFetch = useCallback(async () => {
    const expired = isTokenExpired();

    if (expired) {
      await refreshToken();
    }
  }, [isTokenExpired, refreshToken]);

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpGet({ ...input }, { ...headers });

      return result;
    },
    [httpGet, runPreFetch]
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpPost({ ...input }, { ...headers });

      return result;
    },
    [httpPost, runPreFetch]
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpDelete({ ...input }, { ...headers });

      return result;
    },
    [httpDelete, runPreFetch]
  );

  const runPatch = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpPatch({ ...input }, { ...headers });

      return result;
    },
    [httpPatch, runPreFetch]
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
    patch: runPatch,
  };
};
