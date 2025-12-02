import { AppButton, AppInputField, AppLayout } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useSignInPageHelper } from "./signIn.hook";

export const SignInMobile: React.FC = () => {
  const { i18n, form, onClickSubmit } = useSignInPageHelper();

  const errorMessage = (error?: string) => {
    if (!error) {
      return undefined;
    }

    return (
      <Typography
        styles={{ fontSize: "16px", fontWeight: 600, color: "#de1616ff" }}
      >
        {error}
      </Typography>
    );
  };

  return (
    <AppLayout>
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <Form
        fields={[
          {
            name: INPUTS.NAME,
            content: (
              <AppInputField
                label={i18n.name.title}
                name={INPUTS.NAME}
                placeHolder={i18n.name.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.nameError)}
              />
            ),
          },
          {
            name: INPUTS.EMAIL,
            content: (
              <AppInputField
                label={i18n.email.title}
                name={INPUTS.EMAIL}
                placeHolder={i18n.email.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.emailError)}
              />
            ),
          },
          {
            name: INPUTS.PHONE,
            content: (
              <AppInputField
                label={i18n.phone.title}
                name={INPUTS.PHONE}
                placeHolder={i18n.phone.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.phoneError)}
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
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.passwordError)}
              />
            ),
          },
          {
            name: INPUTS.PASSWORD_CONFIRMATION,
            content: (
              <AppInputField
                label={i18n.passwordConfirm.title}
                name={INPUTS.PASSWORD_CONFIRMATION}
                placeHolder={i18n.passwordConfirm.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={errorMessage(form.passwordError)}
              />
            ),
          },
        ]}
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
