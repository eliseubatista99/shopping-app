import { Assets } from "@assets";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useProfileBlockHelper } from "./profile.hook";

export const ProfileBlockMobile: React.FC = () => {
  const { i18n, client, onCLickSettings } = useProfileBlockHelper();

  return (
    <>
      {client && (
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "fit-content",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Image
              src={client.image || ""}
              styles={{ width: "25px", height: "25px" }}
            />
            <Typography>{i18n.greetings}</Typography>
          </div>
          <Assets.Icons.Settings
            width="25px"
            height="25px"
            onClick={() => onCLickSettings()}
          />
        </div>
      )}
    </>
  );
};
