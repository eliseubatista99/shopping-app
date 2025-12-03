import { AppButton, AppLayout } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useSignInAndSecurityPageHelper } from "./signInAndSecurity.hook";

export const SignInAndSecurityMobile: React.FC = () => {
  const { i18n, options } = useSignInAndSecurityPageHelper();

  const optionsJSX = options.map((o, index) => (
    <div
      key={o.id}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #a0a0a0ff",
        borderRadius:
          index === 0
            ? "10px 10px 0 0"
            : index === options.length - 1
            ? "0 0 10px 10px"
            : "0",
        padding: "12px 15px",
      }}
    >
      <Typography styles={{ fontSize: "18px" }}>{o.text}</Typography>
      <AppButton
        text={{
          content: o.cta,
          props: {
            styles: {
              fontSize: "16px",
            },
          },
        }}
        onClick={() => o.onClick()}
        styles={{
          width: "fit-content",
          background: "#ffffff",
          border: "1px solid #414141ff",
          paddingBlock: "18px",
        }}
      />
    </div>
  ));

  return (
    <AppLayout
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <div style={{ width: "100%", gap: "0px", marginTop: "10px" }}>
        {optionsJSX}
      </div>
    </AppLayout>
  );
};
