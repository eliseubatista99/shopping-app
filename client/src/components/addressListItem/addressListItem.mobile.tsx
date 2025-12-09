import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import type { AddressListItemProps } from "./addressListItem";
import { useAddressListItemHelper } from "./addressListItem.hook";

export const AddressListItemMobile: React.FC<AddressListItemProps> = (
  props
) => {
  const { i18n, hasActions } = useAddressListItemHelper(props);

  const {
    address,
    onClickDelete,
    onClickEdit,
    onClickSetDefault,
    showDefaultTag,
    styles,
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
      {address.isDefault && showDefaultTag && (
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

      <div style={{ width: "100%", gap: "5px" }}>
        <Typography styles={{ fontWeight: 600 }}>{address.name}</Typography>
        <Typography>{address.street}</Typography>
        <Typography>{`${address.city}, ${address.postalCode}`}</Typography>
        <Typography>{address.country}</Typography>
        <Typography>{i18n.phone}</Typography>
      </div>

      {hasActions && (
        <div style={{ width: "100%", flexDirection: "row", gap: "5px" }}>
          {onClickEdit &&
            actionButton(i18n.actions.edit, () => onClickEdit?.())}
          {onClickDelete &&
            actionButton(i18n.actions.delete, () => onClickDelete?.())}
          {!address.isDefault &&
            onClickSetDefault &&
            actionButton(i18n.actions.setDefault, () => onClickSetDefault?.())}
        </div>
      )}
    </div>
  );
};
