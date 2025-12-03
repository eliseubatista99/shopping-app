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
  const { i18n, emailOrPhoneError, onClickSubmitEmailOrPhone } =
    useSignInOrLoginTemplateHelper(props);

  return (
    <div
      data-testid="signin-or-login-template"
      style={{ width: "100%", flex: 1, ...props.styles }}
    >
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
                  bottomMessage={emailOrPhoneError}
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
        onSubmit={onClickSubmitEmailOrPhone}
        styles={{ flex: 1, gap: "30px", marginTop: "30px" }}
      />
    </div>
  );
};
