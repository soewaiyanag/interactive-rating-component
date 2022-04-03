import Star from "./Star";
import Texts from "./Texts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";

const CardFront = () => {
  return (
    <>
      <Star />
      <Texts />
      <RatingScores />
      <SubmitButton />
    </>
  );
};

export default CardFront;
