import { AppLayout, SignInOrLoginTemplate } from "@components";
import { useSignUpOrLoginPageHelper } from "./signUpOrLogin.hook";

export const SignUpOrLoginMobile: React.FC = () => {
  const { onClickSubmit } = useSignUpOrLoginPageHelper();

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
      <SignInOrLoginTemplate onSubmit={onClickSubmit} />
    </AppLayout>
  );
};
