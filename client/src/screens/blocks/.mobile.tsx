import { useMethodsListBlockHelper } from "./.hook";

export const MethodsListBlockMobile: React.FC = () => {
  const { i18n } = useMethodsListBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
