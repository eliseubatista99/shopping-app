import type { ReviewDto } from "@api";
import { ItemsListTemplate, ReviewListItem } from "@components";
import type { ReviewsListScoreBlockProps } from "./score";
import { useScoreBlockHelper } from "./score.hook";

export const ScoreBlockMobile: React.FC<ReviewsListScoreBlockProps> = ({
  styles,
}) => {
  const { reviews, storeFilters, retrieveItems } = useScoreBlockHelper();

  const renderItem = (i: unknown, index: number) => {
    const item = i as ReviewDto;

    return (
      <ReviewListItem
        key={item.id}
        review={item}
        styles={index === 0 ? { borderTop: "none" } : undefined}
      />
    );
  };

  return (
    <ItemsListTemplate
      items={reviews}
      renderItem={renderItem}
      retrieveItems={retrieveItems}
      filters={storeFilters}
      styles={{ ...styles }}
    />
  );
};
