import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import type { PaymentMethodListItemProps } from "./paymentMethodListItem";
import { usePaymentMethodListItemHelper } from "./paymentMethodListItem.hook";

export const PaymentMethodListItemMobile: React.FC<
  PaymentMethodListItemProps
> = (props) => {
  const { i18n, hasActions } = usePaymentMethodListItemHelper(props);

  const {
    paymentMethod,
    onClickDelete,
    onClickEdit,
    onClickSetDefault,
    showDefaultTag,
    styles,
    imageSize = 40,
    customText,
  } = props;

  const actionButton = (text: string, onClick: () => void) => (
    <AppButton
      text={{
        content: text,
        props: {
          styles: {
            fontSize: "14px",
          },
        },
      }}
      onClick={() => onClick()}
      styles={{
        width: "fit-content",
        background: "#ffffff",
        border: "1px solid #414141ff",
        padding: "13px",
      }}
    />
  );

  return (
    <div
      data-testid="paymentMethodListItem"
      style={{
        width: "100%",
        border: "1px solid #bababaff",
        borderRadius: "10px",
        padding: "15px",
        gap: "15px",
        position: "relative",
        ...styles,
      }}
    >
      {paymentMethod.isDefault && showDefaultTag && (
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
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Image
          src={paymentMethod.image}
          styles={{
            minWidth: `${imageSize}px`,
            maxWidth: `${imageSize}px`,
            objectFit: "contain",
          }}
        />
        {customText && <Typography>{customText}</Typography>}
        {!customText && (
          <Typography>{paymentMethod.cardNumberMasked}</Typography>
        )}
      </div>

      {hasActions && (
        <div style={{ width: "100%", flexDirection: "row", gap: "5px" }}>
          {onClickEdit &&
            actionButton(i18n.actions.edit, () => onClickEdit?.())}
          {onClickDelete &&
            actionButton(i18n.actions.delete, () => onClickDelete?.())}
          {!paymentMethod.isDefault &&
            onClickSetDefault &&
            actionButton(i18n.actions.setDefault, () => onClickSetDefault?.())}
        </div>
      )}
    </div>
  );
};
