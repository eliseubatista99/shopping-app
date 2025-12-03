import { AppButton, AppInputField, AppLayout } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useLogInPageHelper } from "./logIn.hook";

export const LogInMobile: React.FC = () => {
  const { i18n, form, onClickSubmit } = useLogInPageHelper();

  return (
    <AppLayout>
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <Form
        fields={{
          list: [
            {
              name: INPUTS.PHONE_OR_EMAIL,
              content: (
                <AppInputField
                  label={i18n.emailOrPhone.title}
                  name={INPUTS.PHONE_OR_EMAIL}
                  placeHolder={i18n.emailOrPhone.placeholder}
                  inputStyles={{ padding: "10px" }}
                  bottomMessage={form.emailOrPhoneError}
                />
              ),
            },
            {
              name: INPUTS.PASSWORD,
              content: (
                <AppInputField
                  label={i18n.password.title}
                  name={INPUTS.PASSWORD}
                  placeHolder={i18n.password.placeholder}
                  inputStyles={{ padding: "10px" }}
                  bottomMessage={form.passwordError}
                />
              ),
            },
          ],
        }}
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
      />
    </AppLayout>
  );
};
