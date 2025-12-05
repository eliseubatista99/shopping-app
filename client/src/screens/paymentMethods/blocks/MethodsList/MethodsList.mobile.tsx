import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useMethodsListBlockHelper } from "./MethodsList.hook";

export const MethodsListBlockMobile: React.FC = () => {
  const { i18n, paymentMethods } = useMethodsListBlockHelper();

  const paymentMethodsJSX = paymentMethods.map((p) => (
    <div key={p.id}>{p.name}</div>
  ));

  return (
    <>
      <Typography styles={{ fontWeight: 800, fontSize: "22px" }}>
        {i18n.title}
      </Typography>
      <div style={{ width: "100%" }}>{paymentMethodsJSX}</div>
    </>
  );
};
