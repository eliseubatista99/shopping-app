import { ProductsComboItem } from "@components";
import { Carousel, Typography } from "@eliseubatista99/react-scaffold-core";
import { useRelatedBlockHelper } from "./related.hook";

export const RelatedBlockMobile: React.FC = () => {
  const { i18n, product } = useRelatedBlockHelper();

  const slides = (product?.relatedProducts || []).map((i) => ({
    content: (
      <ProductsComboItem
        product={i}
        styles={{ background: "none", width: "160px" }}
      />
    ),
  }));

  return (
    <>
      {product && (
        <>
          <Typography
            styles={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}
          >
            {i18n.related.title}
          </Typography>
          <Carousel content={slides} styles={{ marginTop: "10px" }} />
        </>
      )}
    </>
  );
};
