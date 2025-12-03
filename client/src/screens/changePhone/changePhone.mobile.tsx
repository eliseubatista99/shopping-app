import { AppButton, AppInputField, AppLayout, AppLoader } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useChangePhonePageHelper } from "./changePhone.hook";

export const ChangePhoneMobile: React.FC = () => {
  const { i18n, client, form, onClickSubmit, loading } =
    useChangePhonePageHelper();

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
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
            {i18n.title}
          </Typography>
          <Typography styles={{ fontSize: "16px", marginTop: "15px" }}>
            {i18n.current}
          </Typography>
          <Typography
            styles={{ fontSize: "16px" }}
          >{`${client?.phoneNumberPrefix} ${client?.phoneNumber}`}</Typography>
          <Typography styles={{ fontSize: "16px", marginTop: "15px" }}>
            {i18n.subtitle}
          </Typography>
          <Form
            fields={{
              list: [
                {
                  name: INPUTS.PHONE_PREFIX,
                  content: (
                    <AppInputField
                      name={INPUTS.PHONE_PREFIX}
                      type="number"
                      placeHolder={i18n.prefix.placeholder}
                      inputStyles={{ padding: "10px" }}
                      bottomMessage={form.prefixError}
                    />
                  ),
                },
                {
                  name: INPUTS.PHONE,
                  content: (
                    <AppInputField
                      name={INPUTS.PHONE}
                      type="number"
                      placeHolder={i18n.phone.placeholder}
                      inputStyles={{ padding: "10px" }}
                      bottomMessage={form.phoneError}
                    />
                  ),
                },
              ],
              styles: {
                display: "grid",
                gridTemplateColumns: "100px auto",
                gap: "20px",
              },
            }}
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
        </>
      )}
    </AppLayout>
  );
};
