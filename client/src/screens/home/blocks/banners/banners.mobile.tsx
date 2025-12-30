import { ProductOfferBanner } from "@components";
import {
  Carousel,
  type CarouselSlideProps,
} from "@eliseubatista99/react-scaffold-core";
import { useBannersBlockHelper } from "./banners.hook";

export const BannersBlockMobile: React.FC = () => {
  const { banners } = useBannersBlockHelper();

  const bannersJSX = (banners || []).map(
    (b): CarouselSlideProps => ({
      content: (
        <ProductOfferBanner
          key={b.category}
          category={b.category || ""}
          onClick={b.onClick}
        />
      ),
    })
  );

  return (
    <>
      {banners?.length && (
        <Carousel content={bannersJSX} styles={{ marginTop: "30px" }} />
      )}
    </>
  );
};
