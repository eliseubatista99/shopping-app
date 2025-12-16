import { AppButton } from "@components";
import { MODALS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppModal } from "../_appModal";
import { useGenericApiErrorModalHelper } from "./genericApiError.hook";

export const ModalGenericApiErrorMobile = () => {
  const { i18n, onClickButton } = useGenericApiErrorModalHelper();

  return (
    <AppModal id={MODALS.GENERIC_API_ERROR}>
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {i18n.message}
      </Typography>
      <AppButton
        text={{
          content: i18n.actions.button,
          props: {
            styles: {
              fontSize: "18px",
              fontWeight: 500,
            },
          },
        }}
        onClick={onClickButton}
        styles={{
          width: "fit-content",
          paddingInline: "60px",
        }}
      />
    </AppModal>
  );
};
