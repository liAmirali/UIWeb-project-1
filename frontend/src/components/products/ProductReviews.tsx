import { FC, useState } from "react";
import ReviewItem from "./ReviewItem";
import SubmitReviewForm from "./SubmitReviewForm";
import { getCurrentDate } from "@/utils/date";

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

const ProductReviews: FC = () => {
  const [reviews, setReviews] = useState(customerReviews);

  const handleReviewFormSubmit = (formData: Record<string, unknown>) => {

    setReviews(prev => [...prev, {
      title: "",
      author: formData.name as string,
      body: formData.review as string,
      date: getCurrentDate(),
      profilePic: Math.random() > 0.5 ? "/images/people/alexa-johnson.png" : "/images/people/mark-williams.png",
      rate: formData.rate as number,
      reviewBy: "Electro",
    }])

  };

  return (
    <div>
      <div className="mb-8">
        <b className="text-2xl">Customer Reviews</b>
      </div>

      <div className="space-y-8">
        {reviews.map((review, i) => (
          <ReviewItem key={i} review={review} />
        ))}
      </div>

      <SubmitReviewForm onSubmit={handleReviewFormSubmit} />
    </div>
  );
};

export default ProductReviews;
