import { useCallback, useMemo } from "react";
import { useAuthentication } from "../../useAuthentication";
import { useFetchNoAuth } from "../useFetchCommon";

type FetchWithAuthInput = {
  endpoint: string;
};

type TIn = Record<string, unknown>;

export const useFetchWithAuth = <TOut>({ endpoint }: FetchWithAuthInput) => {
  const { token, isTokenExpired, refreshToken } = useAuthentication();
  const {
    get: httpGet,
    post: httpPost,
    delete: httpDelete,
  } = useFetchNoAuth<TOut>({
    endpoint,
  });

  const commonHeaders = useMemo(() => {
    return {
      authorization: `Bearer ${token}`,
    };
  }, [token]);

  const runPreFetch = useCallback(async () => {
    const expired = isTokenExpired();

    if (expired) {
      await refreshToken();
    }
  }, [isTokenExpired, refreshToken]);

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpGet(
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, httpGet, runPreFetch]
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpPost(
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, httpPost, runPreFetch]
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      await runPreFetch();

      const result = await httpDelete(
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, httpDelete, runPreFetch]
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
  };
};
