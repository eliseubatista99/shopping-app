import { useFavoritesBlockHelper } from "./favorites.hook";

export const FavoritesBlockMobile: React.FC = () => {
  const { i18n } = useFavoritesBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
