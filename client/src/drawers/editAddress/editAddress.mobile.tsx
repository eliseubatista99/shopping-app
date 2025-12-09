import { AppButton, AppCheckbox, AppInputField, AppLoader } from "@components";
import { DRAWERS, INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useEditAddressDrawerHelper } from "./editAddress.hook";

export const DrawerEditAddressMobile = () => {
  const {
    i18n,
    loading,
    form,
    onClickSubmit,
    wantsDefault,
    onToggleDefault,
    addressInEdit,
    formConfiguration,
  } = useEditAddressDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.EDIT_ADDRESS}
      canBeClosed={!loading}
      topContent={
        <Typography
          styles={{
            fontSize: "22px",
            fontWeight: 600,
            padding: "20px 20px 0 20px",
          }}
        >
          {i18n.title}
        </Typography>
      }
      drawerStyles={{ gap: "12px" }}
    >
      <AppLoader
        visible={loading}
        styles={{ zIndex: 1, background: "#ffffff" }}
      />

      <Form
        configurations={formConfiguration}
        childrenStyles={{
          gap: "20px",
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
      >
        <AppInputField
          name={INPUTS.COUNTRY}
          label={i18n.form.country.title}
          initialValue={addressInEdit?.country}
          placeHolder={i18n.form.country.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.countryError}
        />
        <AppInputField
          name={INPUTS.NAME}
          label={i18n.form.name.title}
          initialValue={addressInEdit?.name}
          placeHolder={i18n.form.name.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.nameError}
        />
        <AppInputField
          name={INPUTS.PHONE}
          label={i18n.form.phone.title}
          initialValue={addressInEdit?.phone}
          placeHolder={i18n.form.phone.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.phoneError}
        />
        <AppInputField
          name={INPUTS.STREET}
          label={i18n.form.street.title}
          initialValue={addressInEdit?.street}
          placeHolder={i18n.form.street.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.streetError}
        />{" "}
        <AppInputField
          name={INPUTS.LOCATION}
          label={i18n.form.location.title}
          initialValue={addressInEdit?.location}
          placeHolder={i18n.form.location.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.locationError}
        />
        <AppInputField
          name={INPUTS.CITY}
          label={i18n.form.city.title}
          initialValue={addressInEdit?.city}
          placeHolder={i18n.form.city.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.cityError}
        />
        <AppInputField
          name={INPUTS.POSTAL_CODE}
          label={i18n.form.postalCode.title}
          initialValue={addressInEdit?.postalCode}
          placeHolder={i18n.form.postalCode.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.postalCodeError}
        />
        <AppCheckbox
          name={INPUTS.SET_DEFAULT}
          label={i18n.actions.setDefault}
          checked={wantsDefault}
          onToggle={onToggleDefault}
        />
      </Form>
    </AppDrawer>
  );
};
