import { AppButton, AppInputField, AppLayout, AppLoader } from "@components";
import { INPUTS } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useChangePasswordPageHelper } from "./changePassword.hook";

export const ChangePasswordMobile: React.FC = () => {
  const { i18n, form, onClickSubmit, loading } = useChangePasswordPageHelper();

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
            {i18n.subtitle}
          </Typography>
          <Form
            fields={{
              list: [
                {
                  name: INPUTS.PASSWORD,
                  content: (
                    <AppInputField
                      name={INPUTS.PASSWORD}
                      type="password"
                      placeHolder={i18n.current.placeholder}
                      containerStyles={{ marginTop: "15px" }}
                      inputStyles={{ padding: "10px" }}
                      bottomMessage={form.currentPasswordError}
                    />
                  ),
                },
                {
                  name: INPUTS.NEW_PASSWORD,
                  content: (
                    <AppInputField
                      name={INPUTS.NEW_PASSWORD}
                      type="password"
                      placeHolder={i18n.password.placeholder}
                      containerStyles={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        marginTop: "30px",
                      }}
                      inputStyles={{
                        padding: "10px",
                      }}
                    />
                  ),
                },
                {
                  name: INPUTS.PASSWORD_CONFIRMATION,
                  content: (
                    <AppInputField
                      name={INPUTS.PASSWORD_CONFIRMATION}
                      type="password"
                      placeHolder={i18n.confirmPassword.placeholder}
                      containerStyles={{
                        marginTop: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      }}
                      inputStyles={{ padding: "10px" }}
                      bottomMessage={form.passwordError}
                    />
                  ),
                },
              ],
              styles: {
                gap: 0,
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
