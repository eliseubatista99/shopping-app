import { AppLayout } from "@components";
import { FormBlock } from "./blocks";
import { useLogInPageHelper } from "./logIn.hook";

export const LogInMobile: React.FC = () => {
  const { initialized, onClickBack } = useLogInPageHelper();

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
