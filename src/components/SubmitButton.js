import { useContext } from "react";
import { motion } from "framer-motion";
import SubmitContext from "../context/SubmitContext";

const SubmitButton = () => {
  const { setIsSubmitted } = useContext(SubmitContext);
  return (
    <motion.button
      className="
      uppercase w-full p-2 font-semibold
      text-sm tracking-wider transition-colors
      text-white bg-orange-500 rounded-3xl hover:bg-white hover:text-orange-500"
      onClick={() => {
        setIsSubmitted(true);
      }}
    >
      submit
    </motion.button>
  );
};

export default SubmitButton;
