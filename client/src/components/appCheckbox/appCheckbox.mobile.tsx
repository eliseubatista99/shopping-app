import { Assets } from "@assets";
import { Checkbox, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppCheckboxProps } from "./appCheckbox";

export const AppCheckboxMobile: React.FC<AppCheckboxProps> = ({
  name,
  label,
  styles,
  checkboxStyles,
  onToggle,
  checked,
}) => {
  return (
    <div style={{ flexDirection: "row", gap: "5px", ...styles }}>
      <Checkbox
        name={name}
        checked={checked}
        onToggle={onToggle}
        customCheckedRender={
          <Assets.Icons.Check
            width="18px"
            height="18px"
            style={{ color: "#ffffff" }}
          />
        }
        checkboxStyles={{
          width: "25px",
          height: "25px",
          background: checked ? "#192fd4ff" : undefined,
          ...checkboxStyles,
        }}
        styles={{ flex: undefined, gap: "10px" }}
        label={<Typography>{label}</Typography>}
      />
    </div>
  );
};
