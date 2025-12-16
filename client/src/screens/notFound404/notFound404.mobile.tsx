import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useNotFound404PageHelper } from "./notFound404.hook";

export const NotFound404Mobile: React.FC = () => {
  const { i18n } = useNotFound404PageHelper();

  return <Typography>{i18n.title}</Typography>;
};
