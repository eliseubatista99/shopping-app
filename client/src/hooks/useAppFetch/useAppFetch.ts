import { ApiConfigs, type ApiOutput } from "@api";
import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { ApiHelper } from "@helpers";
import { useCallback, useMemo } from "react";

type AppFetchInput = {
  endpoint: string;
  secure?: boolean;
};

type TIn = Record<string, unknown>;

export const useAppFetch = <TOut>({ endpoint, secure }: AppFetchInput) => {
  const { get: httpGet, post: httpPost, delete: httpDelete } = useFetch();

  const commonHeaders = useMemo(() => {
    let headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (secure) {
      headers = { ...headers, authorization: `Bearer ${ApiHelper.getToken()}` };
    }

    return headers;
  }, [secure]);

  const runGet = useCallback(
    async (input: TIn) => {
      const result = await httpGet<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders }
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
    async (input: TIn) => {
      const result = await httpDelete<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders }
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
