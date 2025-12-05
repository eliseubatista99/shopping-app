import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsDrawerAddCardPaymentMethod } from "./addCardPaymentMethod";
import { translationsDrawerOrderFilters } from "./orderFilters";
import { translationsDrawerReviewFilters } from "./reviewFilters";
import { translationsDrawerSelectAddress } from "./selectAddress";

export const translationsDrawers: TranslationList = {
  ...translationsDrawerSelectAddress,
  ...translationsDrawerReviewFilters,
  ...translationsDrawerOrderFilters,
  ...translationsDrawerAddCardPaymentMethod,
};
