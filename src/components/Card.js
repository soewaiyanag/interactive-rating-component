import { motion } from "framer-motion";
import Star from "./Star";
import Texts from "./Texts";
import RatingScores from "./RatingScores";

const Card = () => {
  return (
    <motion.div
      className="aspect-square w-80 bg-dark-blue
                rounded-2xl p-6
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <Star />
      <Texts />
      <RatingScores />
    </motion.div>
  );
};

export default Card;
