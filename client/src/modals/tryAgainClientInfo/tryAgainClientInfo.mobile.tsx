import { AppButton } from "@components";
import { MODALS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppModal } from "../_appModal";
import { useTryAgainClientInfoModalHelper } from "./tryAgainClientInfo.hook";

export const ModalTryAgainClientInfoMobile = () => {
  const { i18n, onClickButton } = useTryAgainClientInfoModalHelper();

  return (
    <AppModal id={MODALS.TRY_AGAIN_CLIENT_INFO}>
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
