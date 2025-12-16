import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsDrawerAddAddress } from "./addAddress";
import { translationsDrawerAddCardPaymentMethod } from "./addCardPaymentMethod";
import { translationsDrawerEditAddress } from "./editAddress";
import { translationsDrawerEditCardPaymentMethod } from "./editCardPaymentMethod";
import { translationsDrawerOrderFilters } from "./orderFilters";
import { translationsDrawerProductFilters } from "./productFilters";
import { translationsDrawerReviewFilters } from "./reviewFilters";
import { translationsDrawerSelectAddress } from "./selectAddress";
import { translationsDrawerSelectLanguage } from "./selectLanguage";
import { translationsDrawerSelectPaymentMethod } from "./selectPaymentMethod";

export const translationsDrawers: TranslationList = {
  ...translationsDrawerSelectAddress,
  ...translationsDrawerSelectPaymentMethod,
  ...translationsDrawerReviewFilters,
  ...translationsDrawerOrderFilters,
  ...translationsDrawerAddCardPaymentMethod,
  ...translationsDrawerEditCardPaymentMethod,
  ...translationsDrawerAddAddress,
  ...translationsDrawerEditAddress,
  ...translationsDrawerProductFilters,
  ...translationsDrawerSelectLanguage,
};
