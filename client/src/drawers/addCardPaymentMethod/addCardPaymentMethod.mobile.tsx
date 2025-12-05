import { AppButton, AppInputField, AppLoader } from "@components";
import { DRAWERS, INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useAddCardPaymentMethodDrawerHelper } from "./addCardPaymentMethod.hook";

export const DrawerAddCardPaymentMethodMobile = () => {
  const { i18n, loading, form, onClickSubmit } =
    useAddCardPaymentMethodDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.ADD_CARD_PAYMENT_METHOD}
      canBeClosed={!loading}
      drawerStyles={{ gap: "12px" }}
    >
      <AppLoader
        visible={loading}
        styles={{ zIndex: 1, background: "#ffffff" }}
      />
      <Typography
        styles={{
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        {i18n.title}
      </Typography>
      <Form
        fields={{
          list: [
            {
              name: INPUTS.CARD_NUMBER,
              content: (
                <AppInputField
                  name={INPUTS.CARD_NUMBER}
                  label={i18n.form.cardNumber.title}
                  placeHolder={i18n.form.cardNumber.placeholder}
                  containerStyles={{ marginTop: "15px" }}
                  inputStyles={{ padding: "10px" }}
                  bottomMessage={form.cardNumberError}
                />
              ),
            },
            {
              name: INPUTS.DATE,
              content: (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.6fr 0.4fr",
                    width: "100%",
                    alignItems: "flex-end",
                    gap: "15px",
                  }}
                >
                  <div style={{ minWidth: "100%" }}>
                    <Typography
                      styles={{
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {i18n.form.date.title}
                    </Typography>
                    <div
                      style={{
                        display: "grid",
                        gap: "4px",
                        gridTemplateColumns: "0.4fr 0.6fr",
                      }}
                    >
                      <AppInputField
                        name={INPUTS.EXPIRATION_MONTH}
                        type="number"
                        placeHolder={i18n.form.date.month.placeholder}
                        styles={{ width: undefined, overflow: "hidden" }}
                        containerStyles={{ marginTop: "15px", padding: 0 }}
                        inputStyles={{
                          padding: "0",
                          maxWidth: "100%",
                          textAlign: "center",
                        }}
                      />
                      <AppInputField
                        name={INPUTS.EXPIRATION_YEAR}
                        type="number"
                        placeHolder={i18n.form.date.year.placeholder}
                        styles={{ width: undefined, overflow: "hidden" }}
                        containerStyles={{ marginTop: "15px", padding: 0 }}
                        inputStyles={{
                          padding: "0",
                          maxWidth: "100%",
                          textAlign: "center",
                        }}
                      />
                    </div>
                    {form.dateError && (
                      <Typography
                        styles={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#de1616ff",
                        }}
                      >
                        {form.dateError}
                      </Typography>
                    )}
                  </div>

                  <div style={{ minWidth: "100%" }}>
                    <AppInputField
                      name={INPUTS.SECURITY_CODE}
                      label={i18n.form.securityCode.title}
                      placeHolder={i18n.form.securityCode.placeholder}
                      bottomMessage={form.securityCodeError}
                      styles={{ width: undefined, overflow: "hidden" }}
                      containerStyles={{ marginTop: "15px", padding: 0 }}
                      inputStyles={{
                        padding: "0",
                        maxWidth: "100%",
                        textAlign: "center",
                      }}
                    />
                  </div>
                </div>
              ),
            },
            {
              name: INPUTS.NAME,
              content: (
                <AppInputField
                  name={INPUTS.NAME}
                  label={i18n.form.name.title}
                  placeHolder={i18n.form.name.placeholder}
                  containerStyles={{ marginTop: "15px" }}
                  inputStyles={{ padding: "10px" }}
                  bottomMessage={form.nameError}
                />
              ),
            },
          ],
          styles: {
            gap: "20px",
          },
        }}
        submitButton={{
          content: (
            <AppButton
              text={{
                content: i18n.actions.submit,
                props: {
                  styles: {
                    fontSize: "16px",
                  },
                },
              }}
              styles={{ width: "100%", padding: "20px" }}
            />
          ),
          styles: {
            marginTop: "auto",
          },
        }}
        onSubmit={onClickSubmit}
        styles={{ flex: 1, gap: "30px", marginTop: "10px" }}
      />
    </AppDrawer>
  );
};
