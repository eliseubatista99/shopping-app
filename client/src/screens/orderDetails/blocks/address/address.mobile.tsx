import { useAddressBlockHelper } from "./address.hook";

export const AddressBlockMobile: React.FC = () => {
  const { i18n } = useAddressBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
