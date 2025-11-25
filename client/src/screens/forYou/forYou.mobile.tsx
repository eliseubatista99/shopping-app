import { AppLayout, AppLoader } from "@components";
import {
  FavoritesBlock,
  OrdersBlock,
  ProfileBlock,
  ReviewsBlock,
} from "./blocks";
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
      {!loading && (
        <>
          <ProfileBlock />
          <OrdersBlock />
          <FavoritesBlock />
          <ReviewsBlock />
        </>
      )}
    </AppLayout>
  );
};
