import { SignInOrLoginTemplate } from "@components";
import { useFormBlockHelper } from "./form.hook";

export const FormBlockMobile: React.FC = () => {
  const { onClickSubmit } = useFormBlockHelper();

  return <SignInOrLoginTemplate onSubmit={onClickSubmit} />;
};
