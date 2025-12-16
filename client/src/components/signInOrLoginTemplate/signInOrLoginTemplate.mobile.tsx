import {
  AppButton,
  AppInputField,
  AppLoader,
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
    loading,
    emailOrPhoneError,
    onClickSubmitEmailOrPhone,
    formConfiguration,
  } = useSignInOrLoginTemplateHelper(props);

  return (
    <div
      data-testid="signin-or-login-template"
      style={{ width: "100%", flex: 1, padding: "20px 0 0 0", ...props.styles }}
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
        onSubmit={onClickSubmitEmailOrPhone}
        styles={{
          flex: 1,
          gap: "30px",
          marginTop: "30px",
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : undefined,
        }}
      >
        <AppInputField
          label={i18n.emailOrPhone.title}
          name={INPUTS.PHONE_OR_EMAIL}
          placeHolder={i18n.emailOrPhone.placeholder}
          inputStyles={{ padding: "10px" }}
          bottomMessage={emailOrPhoneError}
        />
      </Form>
    </div>
  );
};
