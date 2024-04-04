import Image from "next/image";
import { FC } from "react";
import Rating from "./Rating";

const ProductReviews: FC = () => {
  const customerReviews = [
    {
      author: "Mark Williams",
      profilePic: "/images/people/mark-williams.png",
      title: "Excellent Product, I Love It 😍",
      body: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      rate: 5,
      date: "Sep 08, 2023",
      reviewBy: "Electro",
    },
    {
      author: "Alexa Johnson",
      profilePic: "/images/people/alexa-johnson.png",
      title: "My Brother is very much happy with this iPhone.",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      rate: 5,
      date: "Sep 08, 2023",
      reviewBy: "Electro",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <b className="text-2xl">Customer Reviews</b>
      </div>

      <div className="space-y-8">
        {customerReviews.map((review, i) => (
          <div key={i} className="border-b space-y-4 pb-8">
            {/* Author info */}
            <div className="flex gap-x-4">
              <span>
                <Image src={review.profilePic} alt={review.author} width="50" height="50" />
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
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
