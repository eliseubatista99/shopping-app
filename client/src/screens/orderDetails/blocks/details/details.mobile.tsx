import { Assets } from "@assets";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useDetailsBlockHelper } from "./details.hook";

export const DetailsBlockMobile: React.FC = () => {
  const { i18n, downloadReceipt } = useDetailsBlockHelper();

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
        {i18n.title}
      </Typography>
      <div
        style={{
          width: "100%",
          border: "1px solid #cdcdcdff",
          borderRadius: "8px",
          padding: "15px",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.3fr 0.4fr",
            justifyContent: "space-between",
          }}
        >
          <Typography styles={{ color: "#3b3b3bff" }}>
            {i18n.date.text}
          </Typography>
          <Typography>{i18n.date.value}</Typography>
        </div>

        <div
          onClick={() => {
            downloadReceipt();
          }}
          style={{
            width: "100%",
            borderTop: "1px solid #cdcdcdff",
            borderBottom: "1px solid #cdcdcdff",
            padding: "10px 15px",
            marginTop: "20px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{i18n.receipt}</Typography>
          <Assets.Icons.NavRight width="20px" height="20px" />
        </div>
      </div>
    </div>
  );
};
