import { ApiConfigs, type ApiOutput } from "@api";
import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";

type TIn = Record<string, unknown>;

export const useAppFetch = <TOut>(endpoint: string) => {
  const {
    get: httpGet,
    patch: httpPatch,
    post: httpPost,
    put: httpPut,
    delete: httpDelete,
  } = useFetch();

  const buildCommonHeaders = useCallback(() => {
    const token = "3789463481dasidas";
    return {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
  }, []);

  const runGet = useCallback(
    async (input: TIn) => {
      const result = await httpGet<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        buildCommonHeaders()
      );

      return result;
    },
    [buildCommonHeaders, endpoint, httpGet]
  );

  const runPatch = useCallback(
    async (input: TIn) => {
      const result = await httpPatch<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        buildCommonHeaders()
      );

      return result;
    },
    [buildCommonHeaders, endpoint, httpPatch]
  );

  const runPost = useCallback(
    async (input: TIn) => {
      const result = await httpPost<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        buildCommonHeaders()
      );

      return result;
    },
    [buildCommonHeaders, endpoint, httpPost]
  );

  const runPut = useCallback(
    async (input: TIn) => {
      const result = await httpPut<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        buildCommonHeaders()
      );

      return result;
    },
    [buildCommonHeaders, endpoint, httpPut]
  );

  const runDelete = useCallback(
    async (input: TIn) => {
      const result = await httpDelete<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        buildCommonHeaders()
      );

      return result;
    },
    [buildCommonHeaders, endpoint, httpDelete]
  );

  return {
    get: runGet,
    patch: runPatch,
    post: runPost,
    put: runPut,
    delete: runDelete,
  };
};
