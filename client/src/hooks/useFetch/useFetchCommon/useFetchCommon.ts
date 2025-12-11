import { ApiConfigs, type ApiOutput } from "@api";
import { MODALS } from "@constants";
import { useFeedback, useFetch } from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication } from "@store";
import { useCallback, useMemo } from "react";

export type FetchCommonInput = {
  endpoint: string;
  showGenericErrorModal?: boolean;
  onError?: () => void;
};

type TIn = Record<string, unknown>;

export const useFetchNoAuth = <TOut>({
  endpoint,
  showGenericErrorModal = true,
  onError,
}: FetchCommonInput) => {
  const { showItem } = useFeedback();

  const token = useStoreAuthentication((state) => state.token);
  const {
    get: httpGet,
    post: httpPost,
    delete: httpDelete,
    patch: httpPatch,
  } = useFetch();

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

  const handleFetchResponse = useCallback(
    (response: ApiOutput<TOut>) => {
      if (!response.metadata.success) {
        if (showGenericErrorModal) {
          showItem(MODALS.GENERIC_API_ERROR);
        }

        onError?.();
      }
    },
    [onError, showGenericErrorModal, showItem]
  );

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpGet<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      handleFetchResponse(result);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpGet]
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpPost<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      handleFetchResponse(result);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpPost]
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpDelete<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      handleFetchResponse(result);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpDelete]
  );

  const runPatch = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const result = await httpPatch<ApiOutput<TOut>>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers }
      );

      handleFetchResponse(result);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpPatch]
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
    patch: runPatch,
  };
};
