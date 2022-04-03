import thankIllustration from "../images/illustration-thank-you.svg";
import CardBackTexts from "./CardBackTexts";
import { useContext } from "react";
import RatingScoreContext from "../context/RatingScoreContext";

const CardBack = () => {
  const { ratingScore } = useContext(RatingScoreContext);
  return (
    <div className="text-center min-h-full space-y-6">
      <img src={thankIllustration} alt="thank you" className="mx-auto w-36" />
      <span className="bg-light-grey bg-opacity-10 text-orange-500 text-sm py-1 px-3 rounded-xl inline-block">
        You selected {ratingScore} out of 5
      </span>
      <CardBackTexts />
    </div>
  );
};

export default CardBack;
