import { Separator } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AddressHelper } from "@helpers";
import { useAddressBlockHelper } from "./address.hook";

export const AddressBlockMobile: React.FC = () => {
  const { i18n, selectedAddress, onClickChangeAddress } =
    useAddressBlockHelper();

  return (
    <>
      {selectedAddress && (
        <div style={{ width: "100%", gap: "10px", marginTop: "20px" }}>
          <Separator />
          <Typography
            styles={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {i18n.addressName}
          </Typography>
          <Typography
            styles={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {AddressHelper.formatAddressLong(selectedAddress)}
          </Typography>
          <div
            onClick={() => onClickChangeAddress()}
            style={{ cursor: "pointer", color: "#023492" }}
          >
            <Typography>{i18n.change}</Typography>
          </div>
        </div>
      )}
    </>
  );
};
