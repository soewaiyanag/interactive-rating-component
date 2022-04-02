import { motion } from "framer-motion";
import Star from "./Star";
import Texts from "./Texts";
import RatingScores from "./RatingScores";
import SubmitButton from "./SubmitButton";

const Card = () => {
  return (
    <motion.div
      className="w-[21rem] bg-dark-blue
                rounded-2xl p-8 space-y-6 shadow-lg
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <Star />
      <Texts />
      <RatingScores />
      <SubmitButton />
    </motion.div>
  );
};

export default Card;
