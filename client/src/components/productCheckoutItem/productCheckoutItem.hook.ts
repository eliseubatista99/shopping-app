import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import type { ProductCheckoutItemProps } from "./productCheckoutItem";

export const useProductCheckoutItemHelper = (
  props: ProductCheckoutItemProps
) => {
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);

  return { currency };
};
