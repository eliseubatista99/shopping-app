import { AppLayout, SignInOrLoginTemplate } from "@components";
import { useSignUpOrLoginPageHelper } from "./signUpOrLogin.hook";

export const SignUpOrLoginMobile: React.FC = () => {
  const { onClickSubmit } = useSignUpOrLoginPageHelper();

  return (
    <AppLayout>
      <SignInOrLoginTemplate onSubmit={onClickSubmit} />
    </AppLayout>
  );
};
