import { useScoreBlockHelper } from "./score.hook";

export const ScoreBlockMobile: React.FC = () => {
  const { i18n } = useScoreBlockHelper();

  return <>{i18n.title}</>;
};
