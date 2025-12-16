import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useOptionsBlockHelper } from "./options.hook";

export const OptionsBlockMobile: React.FC = () => {
  const { i18n, options } = useOptionsBlockHelper();

  const optionsJSX = options.map((o) => (
    <div
      key={o.id}
      onClick={() => o.onClick()}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #a0a0a0ff",
        borderRadius: "10px",
        padding: "12px 15px",
      }}
    >
      <Typography styles={{ fontSize: "18px" }}>{o.text}</Typography>
      {o.icon}
    </div>
  ));

  return (
    <>
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <div style={{ width: "100%", gap: "10px", marginTop: "10px" }}>
        {optionsJSX}
      </div>
    </>
  );
};
