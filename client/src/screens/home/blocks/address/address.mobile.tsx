import type { AddressDto } from "@api";
import { SelectAddressDrawer } from "@drawers";

export const AddressBlockMobile: React.FC = () => {
  //   const { i18n } = useAddressBlockHelper();

  return (
    <SelectAddressDrawer
      onAddressSelected={(data: AddressDto | undefined) => {
        console.log("ZAU", data);
      }}
    />
  );
};
