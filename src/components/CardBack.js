import { motion } from "framer-motion";
import thankIllustration from "../images/illustration-thank-you.svg";
import CardBackTexts from "./CardBackTexts";
import { useContext } from "react";
import RatingScoreContext from "../context/RatingScoreContext";
import clsx from "clsx";

const CardBack = ({ extraClassName }) => {
  const { ratingScore } = useContext(RatingScoreContext);
  return (
    <motion.div
      layout
      className={clsx("text-center min-h-full space-y-6", extraClassName)}
    >
      <img src={thankIllustration} alt="thank you" className="mx-auto w-36" />
      <span className="bg-light-grey bg-opacity-10 text-orange-500 text-sm py-1 px-3 rounded-xl inline-block">
        You selected {ratingScore} out of 5
      </span>
      <CardBackTexts />
    </motion.div>
  );
};

export default CardBack;
