import { ProductScore } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useScoreBlockHelper } from "./score.hook";

export const ScoreBlockMobile: React.FC = () => {
  const { i18n, product } = useScoreBlockHelper();

  console.log(product);

  return (
    <>
      {product && (
        <>
          <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
            {i18n.title}
          </Typography>
          <ProductScore
            score={product?.score || 0}
            starsSize={16}
            withScoreText
            styles={{ marginTop: "8px" }}
          />
          <Typography
            styles={{ fontSize: "16px", fontWeight: 400, marginTop: "8px" }}
          >
            {i18n.count}
          </Typography>
        </>
      )}
    </>
  );
};
