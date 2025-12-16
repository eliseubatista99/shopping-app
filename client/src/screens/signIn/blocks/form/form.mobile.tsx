import { AppButton, AppInputField, AppLoader } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useFormBlockHelper } from "./form.hook";

export const FormBlockMobile: React.FC = () => {
  const {
    i18n,
    loading,
    formConfiguration,
    form,
    onClickSubmit,
    initialValues,
  } = useFormBlockHelper();

  return (
    <>
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
      {!loading && (
        <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
          {i18n.title}
        </Typography>
      )}

      <Form
        configurations={formConfiguration}
        submitButton={{
          content: (
            <AppButton
              text={{
                content: i18n.actions.signIn,
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
          marginTop: "30px",
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : undefined,
        }}
      >
        <AppInputField
          label={i18n.name.title}
          name={INPUTS.NAME}
          placeHolder={i18n.name.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.nameError}
        />
        <AppInputField
          label={i18n.email.title}
          name={INPUTS.EMAIL}
          initialValue={initialValues.email}
          placeHolder={i18n.email.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.emailError}
        />
        <AppInputField
          label={i18n.phone.title}
          name={INPUTS.PHONE}
          initialValue={initialValues.phone}
          placeHolder={i18n.phone.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.phoneError}
        />
        <AppInputField
          label={i18n.password.title}
          type="password"
          name={INPUTS.PASSWORD}
          placeHolder={i18n.password.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.passwordError}
        />
        <AppInputField
          label={i18n.passwordConfirm.title}
          type="password"
          name={INPUTS.PASSWORD_CONFIRMATION}
          placeHolder={i18n.passwordConfirm.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.passwordConfirmationError}
        />
      </Form>
    </>
  );
};
