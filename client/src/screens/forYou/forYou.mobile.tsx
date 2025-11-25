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
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
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
