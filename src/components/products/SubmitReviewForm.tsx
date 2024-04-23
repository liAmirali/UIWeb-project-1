import { FC, useState } from "react";
import Input from "../common/Input";

import EmptyStarIcon from "@/public/icons/huge-icon/interface/outline/star.svg?react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import { toast } from "react-toastify";

interface Props {
  onSubmit?: (data: Record<string, unknown>) => void;
}

const SubmitReviewForm: FC<Props> = ({ onSubmit }) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [reviewInputValue, setReviewInputValue] = useState("");
  const [selectedRate, setSelectedRate] = useState(0);

  const handleSubmitClick = () => {
    if (!nameInputValue || !emailInputValue || !reviewInputValue) {
      toast("Please fill out all the inputs.", { type: "error" });
      return null;
    }

    const formData = {
      name: nameInputValue,
      email: emailInputValue,
      review: reviewInputValue,
    };

    if (onSubmit) onSubmit(formData);
  };

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
        <Input
          label="Name"
          placeholder="Enter Your Name"
          onChange={(e) => setNameInputValue(e.target.value)}
        />
        <Input
          label="Email Address"
          placeholder="Enter Your Email"
          onChange={(e) => setEmailInputValue(e.target.value)}
        />
        <TextArea
          label="Your Review"
          placeholder="Enter Your Review"
          onChange={(e) => setReviewInputValue(e.target.value)}
        />

        <Button className="self-start" onClick={handleSubmitClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SubmitReviewForm;
