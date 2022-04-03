import { motion } from "framer-motion";
import CardFront from "./CardFront";

const Card = () => {
  return (
    <motion.div
      className="w-[21rem] aspect-square bg-dark-blue
                rounded-2xl p-8 space-y-6 shadow-lg style
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <CardFront />
    </motion.div>
  );
};

export default Card;
