import { FC } from "react";
import Input from "../common/Input";

import EmptyStarIcon from "@/public/icons/huge-icon/interface/outline/star.svg?react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const SubmitReviewForm: FC = () => {
  return (
    <div className="py-14 space-y-8">
      <b className="text-2xl">Add your Review</b>

      <div className="flex flex-col gap-y-2">
        <span className="text-dark-500">Your Rating</span>
        <div className="flex space-x-2 divide-x text-dark-500">
          {Array.from(Array(5).keys()).map((numStars) => (
            <span key={numStars} className="flex pl-2 first:pl-0">
              {Array.from(Array(numStars + 1).keys()).map((star) => (
                <EmptyStarIcon key={star} />
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <Input label="Name" placeholder="Enter Your Name" />
        <Input label="Email Address" placeholder="Enter Your Email" />
        <TextArea label="Your Review" placeholder="Enter Your Review" />

        <Button className="self-start">Submit</Button>
      </div>
    </div>
  );
};

export default SubmitReviewForm;
