import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useSplashPageHelper } from "./splash.hook";

export const SplashMobile: React.FC = () => {
  useSplashPageHelper();

  return <Typography>Shopping App</Typography>;
};
