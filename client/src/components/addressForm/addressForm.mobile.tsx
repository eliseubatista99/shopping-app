import { INPUTS } from "@constants";
import { Form } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { AppCheckbox } from "../appCheckbox";
import { AppInputField } from "../appInputField";
import { AppLoader } from "../appLoader";
import type { AddressFormProps } from "./addressForm";
import { useAddressFormHelper } from "./addressForm.hook";

export const AddressFormMobile: React.FC<AddressFormProps> = (props) => {
  const {
    i18n,
    loading,
    errors,
    onClickSubmit,
    initialValue,
    formConfiguration,
    wantsDefault,
    onToggleDefault,
  } = useAddressFormHelper(props);
  const { styles } = props;

  return (
    <div
      data-testid="addressForm"
      style={{
        width: "100%",
        flex: 1,
        position: "relative",
        overflow: loading ? "hidden" : undefined,
        ...styles,
      }}
    >
      <AppLoader
        visible={loading}
        styles={{
          zIndex: 1,
          background: "#ffffff",
          position: "absolute",
          margin: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
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
        styles={{
          flex: 1,
          gap: "30px",
          marginTop: "10px",
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : undefined,
          maxHeight: loading ? "400px" : undefined,
        }}
      >
        <AppInputField
          name={INPUTS.COUNTRY}
          label={i18n.form.country.title}
          initialValue={initialValue?.country || ""}
          placeHolder={i18n.form.country.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.country}
        />
        <AppInputField
          name={INPUTS.NAME}
          label={i18n.form.name.title}
          initialValue={initialValue?.name || ""}
          placeHolder={i18n.form.name.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.name}
        />
        <AppInputField
          name={INPUTS.PHONE}
          label={i18n.form.phone.title}
          initialValue={initialValue?.phone || ""}
          placeHolder={i18n.form.phone.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.phone}
        />
        <AppInputField
          name={INPUTS.STREET}
          label={i18n.form.street.title}
          initialValue={initialValue?.street || ""}
          placeHolder={i18n.form.street.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.street}
        />{" "}
        <AppInputField
          name={INPUTS.LOCATION}
          label={i18n.form.location.title}
          initialValue={initialValue?.location || ""}
          placeHolder={i18n.form.location.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.location}
        />
        <AppInputField
          name={INPUTS.CITY}
          label={i18n.form.city.title}
          initialValue={initialValue?.city || ""}
          placeHolder={i18n.form.city.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.city}
        />
        <AppInputField
          name={INPUTS.POSTAL_CODE}
          label={i18n.form.postalCode.title}
          initialValue={initialValue?.postalCode || ""}
          placeHolder={i18n.form.postalCode.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.postalCode}
        />
        <AppCheckbox
          name={INPUTS.SET_DEFAULT}
          label={i18n.actions.setDefault}
          checked={wantsDefault}
          onToggle={onToggleDefault}
        />
      </Form>
    </div>
  );
};
