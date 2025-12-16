import { Assets } from "@assets";
import { AppLayout, AppLoader, Chip, TryAgainSection } from "@components";
import { BannersBlock, GroupsListBlock, HeaderTriggerBlock } from "./blocks";
import { ConditionOffersBlock } from "./blocks/conditionOffers";
import { useHomePageHelper } from "./home.hook";

export const HomeMobile: React.FC = () => {
  const {
    i18n,
    isAuthenticated,
    header,
    onAddressChipClicked,
    retrieveProductOffers,
    hasError,
    loading,
  } = useHomePageHelper();

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
          <BannersBlock />
          <ConditionOffersBlock />
          <GroupsListBlock />
        </div>
      )}
    </AppLayout>
  );
};
