import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsModalGenericApiError } from "./genericApiError";
import { translationsModalTryAgainClientInfo } from "./tryAgainClientInfo";

export const translationsModals: TranslationList = {
  ...translationsModalGenericApiError,
  ...translationsModalTryAgainClientInfo,
};
