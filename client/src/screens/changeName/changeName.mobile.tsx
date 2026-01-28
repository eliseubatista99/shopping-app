import {
  AppButton,
  AppInputField,
  AppLayout,
  AppLoader,
  AuthenticatedScreen,
} from "@components";
import { INPUTS, PAGES } from "@constants";
import { Form, Typography } from "@eliseubatista99/react-scaffold-core";
import { useChangeNamePageHelper } from "./changeName.hook";

export const ChangeNameMobile: React.FC = () => {
  const { i18n, error, onClickSubmit, client, loading, formConfiguration } =
    useChangeNamePageHelper();

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
      <AuthenticatedScreen returnPage={PAGES.CHANGE_NAME}>
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
              configurations={formConfiguration}
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
            >
              <AppInputField
                name={INPUTS.NAME}
                initialValue={client?.name || ""}
                placeHolder={i18n.name.placeholder}
                inputStyles={{ padding: "10px" }}
                bottomMessage={error}
              />
            </Form>
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
