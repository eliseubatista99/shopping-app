import { SignInOrLoginTemplate } from "@components";
import { useAuthenticateBlockHelper } from "./authenticate.hook";

export const AuthenticateBlockMobile: React.FC = () => {
  const { onClickSubmit } = useAuthenticateBlockHelper();

  return <SignInOrLoginTemplate onSubmit={onClickSubmit} />;
};
