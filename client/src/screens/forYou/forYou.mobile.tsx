import { AppLayout, AppLoader } from "@components";
import {
  AuthenticateBlock,
  FavoritesBlock,
  OrdersBlock,
  ProfileBlock,
  ReviewsBlock,
} from "./blocks";
import { useForYouPageHelper } from "./forYou.hook";

export const ForYouMobile: React.FC = () => {
  const { loading, isAuthenticated } = useForYouPageHelper();

  return (
    <AppLayout
      appFooter
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
          {isAuthenticated && (
            <>
              <ProfileBlock />
              <OrdersBlock />
              <FavoritesBlock />
              <ReviewsBlock />
            </>
          )}
          {!isAuthenticated && <AuthenticateBlock />}
        </>
      )}
    </AppLayout>
  );
};
