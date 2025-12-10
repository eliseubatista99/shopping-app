import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { AppInputField } from "../appInputField";
import { AppLoader } from "../appLoader";
import { AppNumericInputField } from "../appNumericInputField";
import type { PaymentMethodFormProps } from "./paymentMethodForm";
import { usePaymentMethodFormHelper } from "./paymentMethodForm.hook";

export const PaymentMethodFormMobile: React.FC<PaymentMethodFormProps> = (
  props
) => {
  const {
    i18n,
    loading,
    errors,
    onClickSubmit,
    initialValue,
    formConfiguration,
  } = usePaymentMethodFormHelper(props);
  const { styles } = props;

  return (
    <div
      data-testid="paymentMethodForm"
      style={{
        width: "100%",
        flex: 1,
        position: "relative",
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
        }}
      >
        <AppNumericInputField
          name={INPUTS.CARD_NUMBER}
          maxLength={16}
          initialValue={initialValue?.cardNumberUnmasked}
          label={i18n.form.cardNumber.title}
          placeHolder={i18n.form.cardNumber.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.cardNumber}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.6fr 0.4fr",
            width: "100%",
            alignItems: "flex-end",
            gap: "15px",
          }}
        >
          <div
            style={{
              minWidth: "100%",
              height: "100%",
              justifyContent: "flex-end",
              display: "flex",
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Typography
                styles={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {i18n.form.date.title}
              </Typography>
            </div>

            <div
              style={{
                display: "grid",
                gap: "4px",
                gridTemplateColumns: "0.4fr 0.6fr",
              }}
            >
              <AppNumericInputField
                name={INPUTS.EXPIRATION_MONTH}
                placeHolder={i18n.form.date.month.placeholder}
                initialValue={initialValue?.expirationMonth?.toString()}
                max={12}
                styles={{ width: undefined, overflow: "hidden" }}
                containerStyles={{ marginTop: "15px", padding: 0 }}
                inputStyles={{
                  padding: "0",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              />
              <AppNumericInputField
                name={INPUTS.EXPIRATION_YEAR}
                placeHolder={i18n.form.date.year.placeholder}
                initialValue={initialValue?.expirationYear?.toString()}
                max={9999}
                styles={{ width: undefined, overflow: "hidden" }}
                containerStyles={{ marginTop: "15px", padding: 0 }}
                inputStyles={{
                  padding: "0",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              />
            </div>
            {(errors.expirationMonth || errors.expirationYear) && (
              <Typography
                styles={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#de1616ff",
                }}
              >
                {errors.expirationYear || errors.expirationMonth}
              </Typography>
            )}
          </div>

          <div style={{ minWidth: "100%", display: "flex", flex: 1 }}>
            <AppNumericInputField
              name={INPUTS.SECURITY_CODE}
              label={i18n.form.securityCode.title}
              placeHolder={i18n.form.securityCode.placeholder}
              initialValue={initialValue?.securityCode}
              max={999}
              bottomMessage={errors.securityCode}
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
        <AppInputField
          name={INPUTS.NAME}
          maxLength={50}
          label={i18n.form.name.title}
          initialValue={initialValue?.name}
          placeHolder={i18n.form.name.placeholder}
          containerStyles={{ marginTop: "15px" }}
          inputStyles={{ padding: "10px" }}
          bottomMessage={errors.name}
        />
      </Form>
    </div>
  );
};
