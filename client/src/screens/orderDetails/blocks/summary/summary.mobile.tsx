import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useSummaryBlockHelper } from "./summary.hook";

export const SummaryBlockMobile: React.FC = () => {
  const { i18n, address } = useSummaryBlockHelper();

  const valueRow = (
    text: string,
    value: string,
    styles?: React.CSSProperties
  ) => (
    <div
      style={{
        width: "100%",
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "0.6fr 0.4fr",
        gap: "20px",
        ...styles,
      }}
    >
      <Typography styles={{ fontSize: "inherit", fontWeight: "inherit" }}>
        {text}
      </Typography>
      <Typography styles={{ fontSize: "inherit", fontWeight: "inherit" }}>
        {value}
      </Typography>
    </div>
  );

  return (
    <div style={{ width: "100%", padding: "10px 20px" }}>
      {address && (
        <>
          <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
            {i18n.title}
          </Typography>{" "}
          <div
            style={{
              width: "100%",
              border: "1px solid #bababaff",
              borderRadius: "10px",
              padding: "15px",
              marginTop: "15px",
              gap: "15px",
            }}
          >
            {valueRow(i18n.costs.products.text, i18n.costs.products.value)}
            {valueRow(i18n.costs.shipping.text, i18n.costs.shipping.value)}
            {/* <Typography>{i18n.costs.vat}</Typography> */}
            {valueRow(i18n.costs.discounts.text, i18n.costs.discounts.value)}
            {valueRow(i18n.costs.total.text, i18n.costs.total.value, {
              fontWeight: 600,
            })}
            {valueRow(i18n.costs.vat, "", { color: "#2734c2ff" })}
          </div>
        </>
      )}
    </div>
  );
};
