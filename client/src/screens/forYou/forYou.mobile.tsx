import { AppLayout, AppLoader } from "@components";
import { useForYouPageHelper } from "./forYou.hook";

export const ForYouMobile: React.FC = () => {
  const { loading } = useForYouPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && <></>}
    </AppLayout>
  );
};
