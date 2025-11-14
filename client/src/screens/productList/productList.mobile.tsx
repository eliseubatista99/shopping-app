import { AppLayout } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductListPageHelper } from "./productList.hook";

export const ProductListMobile: React.FC = () => {
  const { products } = useProductListPageHelper();

  const productsJSX = products?.map((p, index) => (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        borderTop: index === 0 ? undefined : "1px solid #5f5f5f54",
        padding: "10px 15px",
        gap: "20px",
      }}
    >
      <Typography styles={{ lineHeight: 2 }}>{p.name}</Typography>
    </div>
  ));

  return (
    <AppLayout
      pageStyles={{
        padding: 0,
      }}
      appHeader={{
        withBack: true,
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      <div style={{ width: "100%", flexDirection: "column" }}>
        {productsJSX}
      </div>
    </AppLayout>
  );
};
