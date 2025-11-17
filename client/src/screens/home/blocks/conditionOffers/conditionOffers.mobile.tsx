import { Carousel, Typography } from "@eliseubatista99/react-scaffold-core";
import { useConditionOffersBlockHelper } from "./conditionOffers.hook";

export const ConditionOffersBlockMobile: React.FC = () => {
  const { offers } = useConditionOffersBlockHelper();

  const offersJSX = offers.map((o) => ({
    content: (
      <div
        style={{
          width: "100px",
          height: "150px",
          backgroundImage: `url('${o.image}')`,
          backgroundSize: "cover",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <Typography styles={{ fontSize: "16px", fontWeight: "600" }}>
          {o.title}
        </Typography>
      </div>
    ),
  }));

  return <Carousel content={offersJSX} styles={{ marginTop: "30px" }} />;
};
