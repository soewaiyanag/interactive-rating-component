import { motion } from "framer-motion";
import Star from "./Star";
import CardFrontTexts from "./CardFrontTexts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";
import clsx from "clsx";

const CardFront = ({ extraClassName }) => {
  return (
    <motion.div
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      role="application"
      className={clsx("space-y-6", extraClassName)}
    >
      <Star />
      <CardFrontTexts />
      <RatingScores />
      <SubmitButton />
    </motion.div>
  );
};

export default CardFront;
