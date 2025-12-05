import { AppButton } from "@components";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useMethodsListBlockHelper } from "./methodsList.hook";

export const MethodsListBlockMobile: React.FC = () => {
  const {
    i18n,
    paymentMethods,
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
  } = useMethodsListBlockHelper();

  const paymentMethodsJSX = paymentMethods.map((p) => (
    <div
      key={p.id}
      style={{
        width: "100%",
        border: "1px solid #bababaff",
        borderRadius: "10px",
        padding: "15px",
        marginTop: "15px",
        flexDirection: "row",
        alignItems: "center",
        gap: "15px",
        position: "relative",
      }}
    >
      {p.isDefault && (
        <div
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "#4aaa43ff",
            padding: "2px 10px",
            border: "1px solid #bababaff",
            borderRadius: "10px",
          }}
        >
          <Typography>{i18n.default}</Typography>
        </div>
      )}
      <Image src={p.image} styles={{ width: "40px" }} />
      <Typography>{p.cardNumber}</Typography>
      <div style={{ width: "100%", flexDirection: "row" }}>
        <AppButton
          text={{
            content: i18n.actions.edit,
            props: {
              styles: {
                fontSize: "16px",
              },
            },
          }}
          onClick={() => onClickEdit(p)}
          styles={{
            width: "fit-content",
            background: "#ffffff",
            border: "1px solid #414141ff",
            paddingBlock: "18px",
          }}
        />
      </div>
    </div>
  ));

  return (
    <>
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography styles={{ fontWeight: 800, fontSize: "22px" }}>
          {i18n.title}
        </Typography>
        <div onClick={() => onClickAdd()} style={{ color: "#0a23e0ff" }}>
          <Typography>{i18n.actions.add}</Typography>
        </div>
      </div>

      <div style={{ width: "100%" }}>{paymentMethodsJSX}</div>
    </>
  );
};
