import { motion } from "framer-motion";

const SubmitButton = () => {
  return (
    <motion.button
      className="
      uppercase w-full p-2
      font-normal text-sm tracking-wider text-white
      bg-orange-500 rounded-3xl"
    >
      submit
    </motion.button>
  );
};

export default SubmitButton;
