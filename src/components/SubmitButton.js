import { motion } from "framer-motion";

const SubmitButton = () => {
  return (
    <motion.button
      className="
      uppercase w-full p-2 font-semibold
      text-sm tracking-wider transition-colors
      text-white bg-orange-500 rounded-3xl hover:bg-white hover:text-orange-500"
    >
      submit
    </motion.button>
  );
};

export default SubmitButton;
