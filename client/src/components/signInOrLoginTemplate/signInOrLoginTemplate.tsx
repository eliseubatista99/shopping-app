import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { SignInOrLoginTemplateDesktop } from "./signInOrLoginTemplate.desktop";
import { SignInOrLoginTemplateMobile } from "./signInOrLoginTemplate.mobile";

export type SignInOrLoginTemplateStep = "login" | "signUp";

export type SignInOrLoginSubmitData = {
  step: SignInOrLoginTemplateStep;
};

export interface SignInOrLoginTemplateProps {
  onSubmit?: (step: SignInOrLoginSubmitData) => void;
  styles?: React.CSSProperties;
}

export const SignInOrLoginTemplate: React.FC<SignInOrLoginTemplateProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SignInOrLoginTemplateMobile {...props} />}
      {currentSize === "desktop" && <SignInOrLoginTemplateDesktop {...props} />}
    </>
  );
};
