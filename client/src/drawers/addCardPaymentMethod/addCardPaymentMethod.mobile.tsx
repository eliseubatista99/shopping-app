import { PaymentMethodForm } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useAddCardPaymentMethodDrawerHelper } from "./addCardPaymentMethod.hook";

export const DrawerAddCardPaymentMethodMobile = () => {
  const { i18n, canCloseDrawer, onClickSubmit } =
    useAddCardPaymentMethodDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.ADD_CARD_PAYMENT_METHOD}
      canBeClosed={canCloseDrawer}
      drawerStyles={{ gap: "12px" }}
    >
      <Typography
        styles={{
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        {i18n.title}
      </Typography>
      <PaymentMethodForm onSubmit={onClickSubmit} />
    </AppDrawer>
  );
};
