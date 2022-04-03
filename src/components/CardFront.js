import Star from "./Star";
import CardFrontTexts from "./CardFrontTexts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";

const CardFront = () => {
  return (
    <div className="space-y-6">
      <Star />
      <CardFrontTexts />
      <RatingScores />
      <SubmitButton />
    </div>
  );
};

export default CardFront;
