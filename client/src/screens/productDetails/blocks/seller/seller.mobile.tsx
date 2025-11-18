import { SellerListItem } from "src/components/sellerListItem";
import { useSellerBlockHelper } from "./seller.hook";

export const SellerBlockMobile: React.FC = () => {
  const { seller } = useSellerBlockHelper();

  return <>{seller && <SellerListItem seller={seller} />}</>;
};
