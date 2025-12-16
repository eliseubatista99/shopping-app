import {
  AppLayout,
  AppLoader,
  AuthenticatedScreen,
  PaymentMethodListItem,
} from "@components";
import { PAGES } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { usePaymentMethodsPageHelper } from "./paymentMethods.hook";

export const PaymentMethodsMobile: React.FC = () => {
  const {
    i18n,
    paymentMethods,
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
    loading,
  } = usePaymentMethodsPageHelper();

  const paymentMethodsJSX = paymentMethods.map((p) => (
    <PaymentMethodListItem
      key={p.id}
      paymentMethod={p}
      showDefaultTag
      imageSize={60}
      onClickEdit={() => onClickEdit?.(p)}
      onClickDelete={() => onClickDelete?.(p)}
      onClickSetDefault={() => onClickSetDefault?.(p)}
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
              {paymentMethodsJSX}
            </div>
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
