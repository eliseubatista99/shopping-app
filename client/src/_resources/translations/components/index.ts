import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAddressForm } from "./addressForm";
import { translationsAddressListItem } from "./addressListItem";
import { translationsItemsListTemplate } from "./itemsListTemplate";
import { translationsPaymentMethodForm } from "./paymentMethodForm";
import { translationsPaymentMethodListItem } from "./paymentMethodListItem";
import { translationsSignUpOrLoginTemplate } from "./signUpOrLoginTemplate";
import { translationsTryAgainSection } from "./tryAgainSection";

export const translationsComponents: TranslationList = {
  ...translationsTryAgainSection,
  ...translationsPaymentMethodListItem,
  ...translationsAddressListItem,
  ...translationsItemsListTemplate,
  ...translationsPaymentMethodForm,
  ...translationsAddressForm,
  ...translationsSignUpOrLoginTemplate,
};
