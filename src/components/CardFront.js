import Star from "./Star";
import CardFrontTexts from "./CardFrontTexts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";

const CardFront = () => {
  return (
    <>
      <Star />
      <CardFrontTexts />
      <RatingScores />
      <SubmitButton />
    </>
  );
};

export default CardFront;
