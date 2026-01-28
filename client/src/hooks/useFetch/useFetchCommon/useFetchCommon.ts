import { ApiConfigs, type OutputMetadataDto } from "@api";
import { MODALS } from "@constants";
import {
  useFeedback,
  useFetch,
  type FetchOutput,
} from "@eliseubatista99/react-scaffold-core";
import { useCallback, useMemo } from "react";
import { useStoreAuthentication } from "../../../store";

export type FetchCommonInput = {
  endpoint: string;
  showGenericErrorModal?: boolean;
  onError?: () => void;
};

type TIn = Record<string, unknown>;

type BaseOut = {
  metadata?: OutputMetadataDto | null;
  statusCode?: number;
};

export const useFetchNoAuth = <TOut extends BaseOut>({
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
    (metadata?: OutputMetadataDto | null) => {
      if (metadata?.success !== true) {
        if (showGenericErrorModal) {
          showItem(MODALS.GENERIC_API_ERROR);
        }

        onError?.();
      }
    },
    [onError, showGenericErrorModal, showItem],
  );

  const parseResponse = useCallback((response: FetchOutput<TOut>) => {
    let result: Partial<BaseOut> = {};

    try {
      if (response.result) {
        result = response.result as TOut;
      }
    } catch {
      result = {};
    }

    result.metadata = result.metadata ?? { success: false };
    result.statusCode = response.statusCode;

    return result as TOut;
  }, []);

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const fetchRes = await httpGet<TOut>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers },
      );

      const result = parseResponse(fetchRes);
      handleFetchResponse(result.metadata);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpGet, parseResponse],
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const fetchRes = await httpPost<TOut>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers },
      );

      const result = parseResponse(fetchRes);
      handleFetchResponse(result.metadata);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpPost, parseResponse],
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const fetchRes = await httpDelete<TOut>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers },
      );

      const result = parseResponse(fetchRes);
      handleFetchResponse(result.metadata);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpDelete, parseResponse],
  );

  const runPatch = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      const fetchRes = await httpPatch<TOut>(
        `${ApiConfigs.endpoint}/${endpoint}`,
        { ...input },
        { ...commonHeaders, ...headers },
      );

      const result = parseResponse(fetchRes);
      handleFetchResponse(result.metadata);

      return result;
    },
    [commonHeaders, endpoint, handleFetchResponse, httpPatch, parseResponse],
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
    patch: runPatch,
  };
};
