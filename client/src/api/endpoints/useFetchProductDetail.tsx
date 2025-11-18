import { useCallback } from "react";
import type {
  DocumentDto,
  ProductDetailDto,
  ProductDto,
  ProductOptionDto,
  ReviewDto,
} from "../types";

export type ProductDetailOutputDto = {
  product: ProductDetailDto;
};

export type ProductDetailInputDto = {
  productId: string;
};

export const useFetchProductDetail = () => {
  //   const fetchHook = useFetch();

  const fetch = useCallback(async (input: ProductDetailInputDto) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await fetchHook<Person[]>("http://localhost:5000/test");
    console.debug("Fetching product detail for id:", input.productId);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const productOption: ProductOptionDto = {
      id: "2",
      name: "Mesinha cebeceira VASAGÇLE",
      image:
        "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
      price: 40.59,
      originalPrice: 40.59,
    };

    const relatedProduct: ProductDto = {
      id: "2",
      name: "Mesinha cebeceira VASAGÇLE",
      image:
        "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
      price: 40.59,
      originalPrice: 50.59,
      score: 4,
      scoreCount: 20,
    };

    const review: ReviewDto = {
      id: "1",
      reviewer: "Eligod",
      score: 3,
      title: "Its okay",
      comment: "It works fine for my needs.",
    };

    const document: DocumentDto = {
      id: "1",
      name: "User Manual",
      content: "",
    };

    const result: ProductDetailOutputDto = {
      product: {
        id: "ABC1",
        name: "Mesinha cebeceira VASAGÇLE",
        image:
          "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
        price: 40.59,
        score: 4,
        originalPrice: 40.59,
        scoreCount: 345,
        description: "Description",
        bestSeller: true,
        freeShipping: true,
        specifications: "",
        documents: [
          { ...document, id: "2" },
          { ...document, id: "3" },
        ],
        seller: {
          id: "1",
          name: "Vente Unique",
          image:
            "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A1RKKUPIHCS9HS/1b6d63037016386ef47f9ee2aae68ba4.w600.h600._RO299,1,0,0,0,0,0,0,0,0,15_FMpng_.png",
        },
        detailImages: [
          "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
          "https://media-fd.conforama.pt/media/650by551/bf97729cf616b39e305bfcc8a1486e27aba14896_126300_01.JPG",
        ],
        productOptions: [
          { ...productOption, id: "ABC1" },
          { ...productOption, id: "3" },
          { ...productOption, id: "3" },
          { ...productOption, id: "4" },
        ],
        relatedProducts: [
          { ...relatedProduct, id: "2" },
          { ...relatedProduct, id: "3" },
          { ...relatedProduct, id: "3" },
          { ...relatedProduct, id: "4" },
        ],
        comboProducts: [
          { ...relatedProduct, id: "2" },
          { ...relatedProduct, id: "3" },
          { ...relatedProduct, id: "3" },
          { ...relatedProduct, id: "4" },
        ],
        reviews: [
          {
            ...review,
            id: "1",
          },
          { ...review, id: "2" },
          { ...review, id: "3" },
          { ...review, id: "4" },
        ],
      },
    };

    return result;
  }, []);

  return {
    fetch,
  };
};
