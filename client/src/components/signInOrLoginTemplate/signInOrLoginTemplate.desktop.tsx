import React from "react";
import type { SignInOrLoginTemplateProps } from "./signInOrLoginTemplate";
import { SignInOrLoginTemplateMobile } from "./signInOrLoginTemplate.mobile";

export const SignInOrLoginTemplateDesktop: React.FC<SignInOrLoginTemplateProps> = (props) => {
  return <SignInOrLoginTemplateMobile {...props} />;
};
