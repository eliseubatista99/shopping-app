import { AppButton } from "@components";
import { useExecutionBlockHelper } from "./execution.hook";

export const ExecutionBlockMobile: React.FC = () => {
  const { i18n, onClickBuyNow } = useExecutionBlockHelper();

  return (
    <AppButton
      text={{
        content: i18n.buyNow,
      }}
      styles={{
        marginTop: "20px",
      }}
      onClick={() => onClickBuyNow()}
    />
  );
};
