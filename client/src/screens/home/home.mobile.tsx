import { Assets } from "@assets";
import { AppLayout, Chip, ProductOfferBanner } from "@components";
import {
  Carousel,
  type CarouselSlideProps,
} from "@eliseubatista99/react-scaffold-core";
import { HeaderTriggerBlock, OffersGroupBlock } from "./blocks";
import { ConditionOffersBlock } from "./blocks/conditionOffers";
import { useHomePageHelper } from "./home.hook";

export const HomeMobile: React.FC = () => {
  const { i18n, groupsList, banners, header, onAddressChipClicked } =
    useHomePageHelper();

  console.log("BANNERS", banners);

  const groupsJSX = groupsList.map((g) => (
    <OffersGroupBlock key={g.title} title={g.title} products={g.products} />
  ));

  const bannersJSX = (banners || []).map(
    (b): CarouselSlideProps => ({
      content: (
        <ProductOfferBanner
          key={b.category}
          category={b.category}
          onClick={() => {
            console.log("Clicked banner ", b);
          }}
        />
      ),
    })
  );

  return (
    <AppLayout
      appHeader={{
        styles: header.headerTriggerVisible
          ? {
              background: "transparent",
              borderBottom: "none",
            }
          : undefined,
      }}
      pageStyles={{ paddingTop: "0px" }}
    >
      <HeaderTriggerBlock onTrigger={header.handleHeaderTrigger} />
      <div style={{ width: "100%", zIndex: 1 }}>
        <Chip
          text={i18n.chips.address}
          onClick={() => onAddressChipClicked()}
          leftContent={<Assets.Icons.Location width="10px" height="10px" />}
          rightContent={<Assets.Icons.NavDown width="15px" height="15px" />}
          styles={{
            border: "none",
            background: "#ffffff70",
            marginTop: "8px",
          }}
        />
        {banners?.length && (
          <Carousel content={bannersJSX} styles={{ marginTop: "30px" }} />
        )}
        <ConditionOffersBlock />
        <div style={{ width: "100%", gap: "30px", marginTop: "30px" }}>
          {groupsJSX}
        </div>
      </div>
    </AppLayout>
  );
};
