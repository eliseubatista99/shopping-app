import { useProfileBlockHelper } from "./profile.hook";

export const ProfileBlockMobile: React.FC = () => {
  const { i18n } = useProfileBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
