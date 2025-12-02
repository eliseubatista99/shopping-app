import {
  AppButton,
  AppInputField,
  type SignInOrLoginTemplateProps,
} from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useSignInOrLoginTemplateHelper } from "./signInOrLoginTemplate.hook";

export const SignInOrLoginTemplateMobile: React.FC<
  SignInOrLoginTemplateProps
> = (props) => {
  const {
    i18n,
    step,
    form,
    onClickSubmitSignUp,
    onClickSubmitLogin,
    onClickSubmitEmailOrPhone,
  } = useSignInOrLoginTemplateHelper(props);

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
    <div
      data-testid="signin-or-login-template"
      style={{ width: "100%", flex: 1, ...props.styles }}
    >
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      {step === "loginOrSignUp" && (
        <Form
          fields={[
            {
              name: INPUTS.PHONE_OR_EMAIL,
              content: (
                <AppInputField
                  label={i18n.email.title}
                  name={INPUTS.PHONE_OR_EMAIL}
                  placeHolder={i18n.email.placeholder}
                  inputStyles={{ height: "150px", padding: "10px" }}
                  bottomMessage={errorMessage(form.emailError)}
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
          onSubmit={onClickSubmitEmailOrPhone}
          styles={{ flex: 1, gap: "30px", marginTop: "30px" }}
        />
      )}

      {step === "signUp" && (
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
          onSubmit={onClickSubmitSignUp}
          styles={{ flex: 1, gap: "30px", marginTop: "30px" }}
        />
      )}

      {step === "logIn" && (
        <Form
          fields={[
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
          onSubmit={onClickSubmitLogin}
          styles={{ flex: 1, gap: "30px", marginTop: "30px" }}
        />
      )}
    </div>
  );
};
