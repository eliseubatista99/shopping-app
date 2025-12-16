import { AppButton, AppLoader, PaymentMethodListItem } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useSelectPaymentMethodDrawerHelper } from "./selectPaymentMethod.hook";

export const DrawerSelectPaymentMethodMobile = () => {
  const {
    i18n,
    methods,
    selectedMethod,
    handleMethodSelected,
    handleSubmit,
    loading,
  } = useSelectPaymentMethodDrawerHelper();

  const methodsJSX = (methods || []).map((i) => {
    const isSelected = selectedMethod?.id === i.id;

    return (
      <PaymentMethodListItem
        paymentMethod={i}
        imageSize={40}
        customText={i18n.methodName(i)}
        onClick={() => handleMethodSelected(i)}
        styles={
          isSelected
            ? {
                border: "1px solid #da5f18ff",
                background: "#ffeadeff",
              }
            : undefined
        }
      />
    );
  });

  return (
    <AppDrawer
      id={DRAWERS.SELECT_PAYMENT_METHOD}
      canBeClosed={!loading}
      drawerStyles={{ gap: "12px" }}
    >
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {i18n.title}
      </Typography>
      {!loading && (
        <>
          <div
            style={{
              width: "100%",
              maxHeight: "80vh",
              gap: "10px",
              marginTop: "30px",
            }}
          >
            {methodsJSX}
          </div>
          <AppButton
            text={{
              content: i18n.button,
            }}
            onClick={handleSubmit}
            styles={{ marginTop: "30px" }}
          />
        </>
      )}
      <AppLoader
        visible={loading}
        styles={{ zIndex: 1, background: "#ffffff" }}
      />
    </AppDrawer>
  );
};
