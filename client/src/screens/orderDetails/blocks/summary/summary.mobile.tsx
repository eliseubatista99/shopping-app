import { useSummaryBlockHelper } from "./summary.hook";

export const SummaryBlockMobile: React.FC = () => {
  const { i18n } = useSummaryBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
