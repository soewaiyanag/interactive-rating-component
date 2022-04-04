import { useContext } from "react";
import { motion } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import SubmitContext from "../context/SubmitContext";
import clsx from "clsx";

const Card = () => {
  const { isSubmitted } = useContext(SubmitContext);
  return (
    <motion.div
      layout
      className="w-80 bg-dark-blue
                rounded-2xl p-6 shadow-lg overflow-hidden
                bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <CardFront extraClassName={clsx(isSubmitted && "hidden")} />
      <CardBack extraClassName={clsx(!isSubmitted && "hidden")} />
    </motion.div>
  );
};

export default Card;
