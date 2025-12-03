import { AppLayout, AppLoader } from "@components";
import { useChangePhonePageHelper } from "./changePhone.hook";

export const ChangePhoneMobile: React.FC = () => {
  const { loading } = useChangePhonePageHelper();

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
