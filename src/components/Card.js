import { useContext } from "react";
import { motion } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import SubmitContext from "../context/SubmitContext";

const Card = () => {
  const { isSubmitted } = useContext(SubmitContext);
  return (
    <motion.div
      className="w-80 aspect-square bg-dark-blue
                rounded-2xl p-6 shadow-lg
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      {!isSubmitted ? <CardFront /> : <CardBack />}
    </motion.div>
  );
};

export default Card;
