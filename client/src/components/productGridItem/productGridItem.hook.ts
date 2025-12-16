import { useStoreBase } from "@store";

export const useProductGridItemHelper = () => {
  const currency = useStoreBase((state) => state.currency);

  return {
    currency,
  };
};
