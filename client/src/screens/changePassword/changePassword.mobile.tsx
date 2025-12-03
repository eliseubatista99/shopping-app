import { AppLayout, AppLoader } from "@components";
import { useChangePasswordPageHelper } from "./changePassword.hook";

export const ChangePasswordMobile: React.FC = () => {
  const { loading } = useChangePasswordPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
        </>
      )}
    </AppLayout>
  );
};
