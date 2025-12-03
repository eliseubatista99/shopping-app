import { AppButton, AppInputField, AppLayout } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useChangePhonePageHelper } from "./changePhone.hook";

export const ChangePhoneMobile: React.FC = () => {
  const { i18n, error, onClickSubmit } = useChangePhonePageHelper();

  return (
    <AppLayout
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#ffffff",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#292361ff",
        },
      }}
    >
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <Typography styles={{ fontSize: "16px", marginTop: "15px" }}>
        {i18n.subtitle}
      </Typography>
      <Form
        fields={[
          {
            name: INPUTS.NAME,
            content: (
              <AppInputField
                name={INPUTS.NAME}
                placeHolder={i18n.name.placeholder}
                inputStyles={{ height: "150px", padding: "10px" }}
                bottomMessage={error}
              />
            ),
          },
        ]}
        submitButton={{
          content: (
            <AppButton
              text={{
                content: i18n.actions.submit,
                props: {
                  styles: {
                    fontSize: "16px",
                  },
                },
              }}
              styles={{ width: "100%", padding: "20px" }}
            />
          ),
          styles: {
            marginTop: "auto",
          },
        }}
        onSubmit={onClickSubmit}
        styles={{ flex: 1, gap: "30px", marginTop: "10px" }}
      />
    </AppLayout>
  );
};
