import { AppButton, AppInputField, AppLayout } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useSignInPageHelper } from "./signIn.hook";

export const SignInMobile: React.FC = () => {
  const { i18n, form, onClickSubmit, formConfiguration } =
    useSignInPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
        },

        styles: {
          borderBottom: "none",
          minHeight: 0,
          paddingTop: "28px",
        },
      }}
    >
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>

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
        styles={{ flex: 1, gap: "30px", marginTop: "30px" }}
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
          placeHolder={i18n.email.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.emailError}
        />
        <AppInputField
          label={i18n.phone.title}
          name={INPUTS.PHONE}
          placeHolder={i18n.phone.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.phoneError}
        />
        <AppInputField
          label={i18n.password.title}
          name={INPUTS.PASSWORD}
          placeHolder={i18n.password.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.passwordError}
        />
        <AppInputField
          label={i18n.passwordConfirm.title}
          name={INPUTS.PASSWORD_CONFIRMATION}
          placeHolder={i18n.passwordConfirm.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={form.passwordError}
        />
      </Form>
    </AppLayout>
  );
};
