import { Assets } from "@assets";
import { Separator } from "@components";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useSpecificationsBlockHelper } from "./specifications.hook";

export const SpecificationsBlockMobile: React.FC = () => {
  const {
    i18n,
    selectedProduct,
    specifications,
    isExpanded,
    onToggleExpansion,
  } = useSpecificationsBlockHelper();

  const specsJSX = specifications.map((spec, index) => (
    <div style={{ width: "100%" }}>
      {index !== 0 && <Separator />}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "0.5fr 0.7fr",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography
          overflowEllipsis={false}
          styles={{ maxWidth: "100%", fontSize: "18px", fontWeight: 600 }}
        >
          {spec.name}
        </Typography>
        <Typography styles={{ fontSize: "18px", fontWeight: 200 }}>
          {spec.value}
        </Typography>
      </div>
    </div>
  ));

  return (
    <>
      {selectedProduct && (
        <>
          <Separator styles={{ marginTop: "30px" }} />
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 5px 0 0",
              marginTop: "20px",
            }}
          >
            <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
              {i18n.title}
            </Typography>
            <Image
              src={isExpanded ? Assets.Icons.NavUp : Assets.Icons.NavDown}
              styles={{
                width: "20px",
                height: "20px",
              }}
              onClick={() => onToggleExpansion()}
            />
          </div>

          {isExpanded && (
            <div style={{ width: "100%", padding: "0 10px" }}>
              <Separator thickness={1} styles={{ marginTop: "20px" }} />

              <div style={{ width: "100%" }}>{specsJSX}</div>
            </div>
          )}

          <Separator styles={{ marginTop: "20px" }} />
        </>
      )}
    </>
  );
};
