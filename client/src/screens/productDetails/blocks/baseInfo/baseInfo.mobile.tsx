import { Tag } from "@components";
import {
  Carousel,
  Image,
  Typography,
} from "@eliseubatista99/react-scaffold-core";
import { ProductOptionItem } from "src/components/productOptionItem";
import { Separator } from "src/components/separator";
import { useBaseInfoBlockHelper } from "./baseInfo.hook";

export const BaseInfoBlockMobile: React.FC = () => {
  const { i18n, product, currency, onClickProduct } = useBaseInfoBlockHelper();

  const productImagesSlides = (product?.detailImages || []).map(
    (image, index) => ({
      content: (
        <Image
          key={index}
          src={image}
          styles={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
        />
      ),
    })
  );

  const productOptionsSlides = (product?.productOptions || []).map(
    (option) => ({
      content: (
        <ProductOptionItem
          key={option.id}
          option={option}
          currency={currency}
          styles={
            option.id === product?.id
              ? {
                  border: "2.5px solid #000000ff",
                }
              : undefined
          }
          onClick={() => onClickProduct(option)}
        />
      ),
    })
  );

  return (
    <>
      {product && (
        <>
          <Typography styles={{ fontSize: "16px", marginTop: "20px" }}>
            {product.name}
          </Typography>
          {product.bestSeller && (
            <Tag
              text={i18n.tags.bestSeller}
              textProps={{
                styles: {
                  color: "#ffffff",
                  fontSize: "14px",
                },
              }}
              styles={{
                background: "#8a0000ff",
                marginTop: "6px",
              }}
            />
          )}
          <Carousel
            content={productImagesSlides}
            settings={{
              slidesToShow: 1,
              rows: 1,
              variableWidth: false,
              infinite: true,
              dots: true,
            }}
            styles={{
              marginTop: "10px",
            }}
          />

          <Separator styles={{ marginTop: "50px" }} />

          <Carousel
            content={productOptionsSlides}
            styles={{
              marginTop: "10px",
            }}
          />

          <Separator styles={{ marginTop: "20px" }} />
        </>
      )}
    </>
  );
};
