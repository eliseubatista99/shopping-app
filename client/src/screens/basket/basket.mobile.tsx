import { AppLayout } from "@components";
import { Chip } from "src/components/chip";
import { useBasketPageHelper } from "./basket.hook";

export const BasketMobile: React.FC = () => {
  const { i18n } = useBasketPageHelper();

  return (
    <AppLayout
      pageStyles={{
        background:
          "linear-gradient(180deg,rgba(16, 52, 71, 1) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <div style={{ width: "100%" }}>
        <Chip
          text={i18n.chips.address}
          styles={{ border: "none", background: "#ffffff70" }}
        />
      </div>
    </AppLayout>
  );
};
