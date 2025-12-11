import { AppLayout } from "@components";
import { FormBlock } from "./blocks";
import { useSignUpOrLoginPageHelper } from "./signUpOrLogin.hook";

export const SignUpOrLoginMobile: React.FC = () => {
  const { initialized } = useSignUpOrLoginPageHelper();

  return (
    <AppLayout
      appHeader={{
        styles: {
          borderBottom: "none",
          minHeight: 0,
          paddingTop: "28px",
        },
      }}
    >
      {initialized && <FormBlock />}
    </AppLayout>
  );
};
