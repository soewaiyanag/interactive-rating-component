import Star from "./Star";
import Texts from "./Texts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";
import { useContext } from "react";
import RatingScoreContext from "../context/RatingScoreContext";

const CardFront = () => {
  const { ratingScore } = useContext(RatingScoreContext);

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
