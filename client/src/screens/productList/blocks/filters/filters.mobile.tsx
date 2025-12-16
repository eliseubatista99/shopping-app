import { useFiltersBlockHelper } from "./filters.hook";

export const FiltersBlockMobile: React.FC = () => {
  const { i18n } = useFiltersBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
