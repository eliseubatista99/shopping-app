import type { TranslationList } from "@eliseubatista99/react-scaffold-core";
import { translationsAddressListItem } from "./addressListItem";
import { translationsItemsListTemplate } from "./itemsListTemplate";
import { translationsPaymentMethodForm } from "./paymentMethodForm";
import { translationsPaymentMethodListItem } from "./paymentMethodListItem";

export const translationsComponents: TranslationList = {
  ...translationsPaymentMethodListItem,
  ...translationsAddressListItem,
  ...translationsItemsListTemplate,
  ...translationsPaymentMethodForm,
};
