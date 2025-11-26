import { useDetailsBlockHelper } from "./details.hook";

export const DetailsBlockMobile: React.FC = () => {
  const { i18n } = useDetailsBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
