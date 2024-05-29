
import { FC } from "react";
import Rating from "./Rating";

interface Props {
  review: ReviewItemT;
}

const ReviewItem: FC<Props> = ({ review }) => {
  return (
    <div className="border-b space-y-4 pb-8">
      {/* Author info */}
      <div className="flex gap-x-4">
        <span>
          <img src={review.profilePic} alt={review.author} width="50" height="50" />
        </span>
        <span className="flex flex-col">
          <span>{review.author}</span>
          <div>{<Rating rating={review.rate} />}</div>
        </span>
      </div>

      {/* Comment content */}
      <div className="space-y-2">
        <b>{review.title}</b>
        <p>{review.body}</p>
      </div>

      {/* Comment metadata */}
      <div className="text-gray-500">
        Review by <span className="text-dark-500">{review.reviewBy}</span> Posted on{" "}
        <span className="text-dark-500">{review.date}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
