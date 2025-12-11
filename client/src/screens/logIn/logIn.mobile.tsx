import { AppLayout } from "@components";
import { PAGES } from "@constants";
import { FormBlock } from "./blocks";
import { useLogInPageHelper } from "./logIn.hook";

export const LogInMobile: React.FC = () => {
  const { initialized } = useLogInPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
          defaultBackPath: PAGES.SIGN_UP_OR_LOGIN,
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
