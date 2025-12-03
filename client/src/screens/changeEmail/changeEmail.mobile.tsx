import { AppLayout, AppLoader } from "@components";
import { useChangeEmailPageHelper } from "./changeEmail.hook";

export const ChangeEmailMobile: React.FC = () => {
  const { loading } = useChangeEmailPageHelper();

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
