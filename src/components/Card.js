import { motion } from "framer-motion";
import { useState } from "react";
import CardFront from "./CardFront";

const Card = () => {
  const [ratingScore, setRatingScore] = useState(null);
  return (
    <motion.div
      animate={{
        rotateY: "180deg",
      }}
      transition={{ ease: "anticipate", type: "spring", duration: 2 }}
      className="w-[21rem] aspect-square bg-dark-blue
                rounded-2xl p-8 space-y-6 shadow-lg style
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <CardFront ratingScore={ratingScore} setRatingScore={setRatingScore} />
    </motion.div>
  );
};

export default Card;
