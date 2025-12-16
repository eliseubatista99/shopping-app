import {
  AddressListItem,
  AppLayout,
  AppLoader,
  AuthenticatedScreen,
} from "@components";
import { PAGES } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useAddressesPageHelper } from "./addresses.hook";

export const AddressesMobile: React.FC = () => {
  const {
    i18n,
    addresses,
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
    loading,
  } = useAddressesPageHelper();

  const addressesJSX = addresses.map((a) => (
    <AddressListItem
      key={a.id}
      address={a}
      showDefaultTag
      onClickEdit={() => onClickEdit?.(a)}
      onClickDelete={() => onClickDelete?.(a)}
      onClickSetDefault={() => onClickSetDefault?.(a)}
    />
  ));

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
        styles: {
          background: "#292361ff",
        },
      }}
    >
      <AuthenticatedScreen returnPage={PAGES.PAYMENT_METHODS}>
        {loading && <AppLoader visible={loading} />}
        {!loading && (
          <>
            <div
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography styles={{ fontWeight: 800, fontSize: "22px" }}>
                {i18n.title}
              </Typography>
              <div onClick={() => onClickAdd()} style={{ color: "#0a23e0ff" }}>
                <Typography>{i18n.actions.add}</Typography>
              </div>
            </div>
            <div style={{ width: "100%", gap: "15px", marginTop: "40px" }}>
              {addressesJSX}
            </div>
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
