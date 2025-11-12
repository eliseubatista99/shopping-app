import type { HeaderTriggerBlockProps } from "./headerTrigger";
import { useHeaderTriggerBlockHelper } from "./headerTrigger.hook";

export const HeaderTriggerBlockMobile: React.FC<HeaderTriggerBlockProps> = (
  props
) => {
  const { triggerRef } = useHeaderTriggerBlockHelper(props);

  return (
    <div
      data-testid="header-trigger-container"
      style={{ width: "100%", position: "relative" }}
    >
      <div
        ref={triggerRef}
        data-testid="header-trigger"
        style={{
          position: "relative",
          width: "100%",
          height: "1px",
          top: "-50px",
        }}
      />
      <div
        style={{
          width: "calc(100% + 48px)",
          zIndex: 0,
          height: 0,
          top: "-87px",
          left: "-24px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: 0,
            width: "100%",
            height: "50vh",
            background:
              "linear-gradient(180deg,rgba(16, 52, 71, 1) 0%, rgba(255, 255, 255, 1) 40%)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
};
