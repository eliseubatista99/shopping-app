import type { OutputMetadataDto } from "@api";
import { useCallback } from "react";
import { useAuthentication } from "../../useAuthentication";
import { useFetchNoAuth, type FetchCommonInput } from "../useFetchCommon";

type FetchWithAuthInput = FetchCommonInput;

type TIn = Record<string, unknown>;

export const useFetchWithAuth = <
  TOut extends { metadata?: OutputMetadataDto | null; statusCode?: number },
>(
  props: FetchWithAuthInput,
) => {
  const { refreshToken, isTokenExpired } = useAuthentication();
  const {
    get: httpGet,
    post: httpPost,
    delete: httpDelete,
    patch: httpPatch,
  } = useFetchNoAuth<TOut>({
    ...props,
  });

  const runFetchWithAuth = useCallback(
    async (fetchFn: () => Promise<TOut>): Promise<TOut> => {
      const expired = isTokenExpired();
      let success = !expired;

      if (expired) {
        const refreshRes = await refreshToken();
        success = refreshRes.success;
      }

      if (!success) {
        return {
          metadata: {
            success: false,
          },
          statusCode: 401,
        } as TOut;
      }

      return await fetchFn();
    },
    [isTokenExpired, refreshToken],
  );

  const runGet = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      return await runFetchWithAuth(() =>
        httpGet({ ...input }, { ...headers }),
      );
    },
    [httpGet, runFetchWithAuth],
  );

  const runPost = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      return await runFetchWithAuth(() =>
        httpPost({ ...input }, { ...headers }),
      );
    },
    [httpPost, runFetchWithAuth],
  );

  const runDelete = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      return await runFetchWithAuth(() =>
        httpDelete({ ...input }, { ...headers }),
      );
    },
    [httpDelete, runFetchWithAuth],
  );

  const runPatch = useCallback(
    async (input: TIn, headers?: HeadersInit) => {
      return await runFetchWithAuth(() =>
        httpPatch({ ...input }, { ...headers }),
      );
    },
    [httpPatch, runFetchWithAuth],
  );

  return {
    get: runGet,
    post: runPost,
    delete: runDelete,
    patch: runPatch,
  };
};
