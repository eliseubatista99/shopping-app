import { useExecutionBlockHelper } from "./execution.hook";

export const ExecutionBlockMobile: React.FC = () => {
  const { i18n } = useExecutionBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
