import { PaymentMethodForm } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useEditCardPaymentMethodDrawerHelper } from "./editCardPaymentMethod.hook";

export const DrawerEditCardPaymentMethodMobile = () => {
  const { i18n, canCloseDrawer, onClickSubmit, paymentMethodInEdit, onMount } =
    useEditCardPaymentMethodDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.EDIT_CARD_PAYMENT_METHOD}
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

      <PaymentMethodForm
        onMount={onMount}
        initialValue={paymentMethodInEdit}
        onSubmit={onClickSubmit}
      />
    </AppDrawer>
  );
};
