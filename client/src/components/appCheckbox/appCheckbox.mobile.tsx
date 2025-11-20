import { Assets } from "@assets";
import { Checkbox } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppCheckboxProps } from "./appCheckbox";

export const AppCheckboxMobile: React.FC<AppCheckboxProps> = ({
  styles,
  onToggle,
  checked,
}) => {
  return (
    <Checkbox
      checked={checked}
      onToggle={onToggle}
      customCheckedRender={
        <Assets.Icons.Check
          width="18px"
          height="18px"
          style={{ color: "#ffffff" }}
        />
      }
      checkedStyles={{ background: "#192fd4ff" }}
      styles={{ width: "25px", height: "25px", ...styles }}
    />
  );
};
