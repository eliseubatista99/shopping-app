import { AppLayout } from "@components";
import { FormBlock } from "./blocks";
import { useSignInPageHelper } from "./signIn.hook";

export const SignInMobile: React.FC = () => {
  const { initialized, onClickBack } = useSignInPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
          onClick: onClickBack,
        },

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
