import React from "react";
import type { QuantityFieldProps } from "./quantityField";
import { QuantityFieldMobile } from "./quantityField.mobile";

export const QuantityFieldDesktop: React.FC<QuantityFieldProps> = (props) => {
  return <QuantityFieldMobile {...props} />;
};
