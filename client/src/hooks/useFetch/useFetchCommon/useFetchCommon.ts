import { ApiConfigs, type ApiOutput } from "@api";
import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication } from "@store";
import { useCallback, useMemo } from "react";

type FetchCommonInput = {
  endpoint: string;
  secure?: boolean;
};

type TIn = Record<string, unknown>;

export const useFetchNoAuth = <TOut>({ endpoint }: FetchCommonInput) => {
  const token = useStoreAuthentication((state) => state.token);
  const { get: httpGet, post: httpPost, delete: httpDelete } = useFetch();

  const commonHeaders = useMemo((): HeadersInit => {
    let headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers = {
        ...headers,
        authorization: `Bearer ${token}`,
      };
    }

    return headers;
  }, [token]);

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpGet<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, endpoint, httpGet]
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpPost<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, endpoint, httpPost]
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpDelete<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      return result;
    },
    [commonHeaders, endpoint, httpDelete]
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
  };
};
