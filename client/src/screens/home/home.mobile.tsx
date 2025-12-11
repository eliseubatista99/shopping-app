import { Assets } from "@assets";
import {
  AppLayout,
  AppLoader,
  Chip,
  ProductOfferBanner,
  TryAgainSection,
} from "@components";
import {
  Carousel,
  type CarouselSlideProps,
} from "@eliseubatista99/react-scaffold-core";
import { HeaderTriggerBlock, OffersGroupBlock } from "./blocks";
import { ConditionOffersBlock } from "./blocks/conditionOffers";
import { useHomePageHelper } from "./home.hook";

export const HomeMobile: React.FC = () => {
  const {
    i18n,
    isAuthenticated,
    groupsList,
    banners,
    header,
    onAddressChipClicked,
    retrieveProductOffers,
    hasError,
    loading,
  } = useHomePageHelper();

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
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#ffffff",
          },
        },
        searchBar: {
          visible: true,
        },
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
      {loading && <AppLoader visible={true} />}
      {hasError && !loading && (
        <TryAgainSection onClickRetry={retrieveProductOffers} />
      )}
      {!hasError && !loading && (
        <div style={{ width: "100%", zIndex: 1 }}>
          {isAuthenticated && (
            <Chip
              text={i18n.chips.address}
              onClick={() => onAddressChipClicked()}
              leftContent={<Assets.Icons.Location width="10px" height="10px" />}
              rightContent={<Assets.Icons.NavDown width="15px" height="15px" />}
              styles={{
                padding: "3px 10px",
                background: "#ffffff70",
                marginTop: "8px",
              }}
            />
          )}
          {banners?.length && (
            <Carousel content={bannersJSX} styles={{ marginTop: "30px" }} />
          )}
          <ConditionOffersBlock />
          <div style={{ width: "100%", gap: "30px", marginTop: "30px" }}>
            {groupsJSX}
          </div>
        </div>
      )}
    </AppLayout>
  );
};
