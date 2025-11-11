import { AppLayout, ProductOfferBanner } from "@components";
import { Chip } from "src/components/chip";
import { OffersGroupBlock } from "./blocks";
import { useHomePageHelper } from "./home.hook";

export const HomeMobile: React.FC = () => {
  const { i18n, groupsList, banners } = useHomePageHelper();

  const groupsJSX = groupsList.map((g) => (
    <OffersGroupBlock key={g.title} title={g.title} products={g.products} />
  ));

  const bannersJSX = banners.map((b) => (
    <ProductOfferBanner
      key={b.category}
      category={b.category}
      onClick={() => {
        console.log("Clicked banner ", b);
      }}
    />
  ));

  return (
    <AppLayout
      styles={{
        background:
          "linear-gradient(180deg,rgba(16, 52, 71, 1) 0%, rgba(255, 255, 255, 1) 40%)",
      }}
    >
      <div style={{ width: "100%" }}>
        <Chip
          text={i18n.chips.address}
          styles={{ border: "none", background: "#ffffff70" }}
        />
      </div>
      <div
        style={{
          flexDirection: "row",
          width: "100%",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {bannersJSX}
      </div>
      <div style={{ width: "100%", gap: "30px", marginTop: "30px" }}>
        {groupsJSX}
      </div>
    </AppLayout>
  );
};
