import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useAddressBlockHelper } from "./address.hook";

export const AddressBlockMobile: React.FC = () => {
  const { i18n, address } = useAddressBlockHelper();

  return (
    <div style={{ width: "100%", padding: "10px 20px" }}>
      {address && (
        <>
          <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
            {i18n.title}
          </Typography>

          {}

          <div
            style={{
              width: "100%",
              border: "1px solid #bababaff",
              borderRadius: "10px",
              padding: "15px",
              marginTop: "15px",
              gap: "5px",
            }}
          >
            <Typography>{address.name}</Typography>
            <Typography>{address.street}</Typography>
            <Typography>{`${address.city}, ${address.postalCode}`}</Typography>
            <Typography>{address.country}</Typography>
          </div>
        </>
      )}
    </div>
  );
};
