import { AppLayout, ProductOfferBanner } from "@components";
import {
  Carousel,
  Image,
  type CarouselSlideProps,
} from "@eliseubatista99/react-scaffold-core";
import { Icons } from "src/assets/icons";
import { Chip } from "src/components/chip";
import { OffersGroupBlock } from "./blocks";
import { useHomePageHelper } from "./home.hook";

export const HomeMobile: React.FC = () => {
  const { i18n, groupsList, banners } = useHomePageHelper();

  const groupsJSX = groupsList.map((g) => (
    <OffersGroupBlock key={g.title} title={g.title} products={g.products} />
  ));

  const bannersJSX = banners.map(
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
      styles={{
        background:
          "linear-gradient(180deg,rgba(16, 52, 71, 1) 0%, rgba(255, 255, 255, 1) 40%)",
      }}
    >
      <Chip
        text={i18n.chips.address}
        leftContent={
          <Image
            src={Icons.Location}
            styles={{
              width: "10px",
              height: "10px",
            }}
          />
        }
        rightContent={
          <Image
            src={Icons.NavDown}
            styles={{
              width: "15px",
              height: "15px",
            }}
          />
        }
        styles={{ border: "none", background: "#ffffff70", marginTop: "8px" }}
      />
      <Carousel content={bannersJSX} styles={{ marginTop: "30px" }} />

      <div style={{ width: "100%", gap: "30px", marginTop: "30px" }}>
        {groupsJSX}
      </div>
    </AppLayout>
  );
};
