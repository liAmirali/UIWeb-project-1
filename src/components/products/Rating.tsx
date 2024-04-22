import { FC } from "react";

import FilledStarIcon from "@/public/icons/huge-icon/interface/solid/star.svg";
import EmptyStarIcon from "@/public/icons/huge-icon/interface/outline/star.svg";

interface Props {
  rating: number;
}

const MAX_RATING = 5;

const Rating: FC<Props> = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex">
      {/* Rate */}
      {Array.from(Array(roundedRating).keys()).map((r, i) => (
        <span key={i}>
          <FilledStarIcon color="#FFC11F" />
        </span>
      ))}

      {/* Empty */}
      {Array.from(Array(MAX_RATING - roundedRating).keys()).map((r, i) => (
        <span key={i}>
          <EmptyStarIcon color="#FFC11F" />
        </span>
      ))}
    </div>
  );
};

export default Rating;
