import { useStoreProduct } from "@store";

export const useSellerBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);

  return {
    seller: selectedProduct?.seller,
  };
};
