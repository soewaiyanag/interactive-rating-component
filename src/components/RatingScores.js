import { motion } from "framer-motion";
import Circle from "./Circle";
import RatingScoreContext from "../context/RatingScoreContext";
import { useContext } from "react";
import clsx from "clsx";

const ratingNums = [1, 2, 3, 4, 5];

const deafultStyle = "bg-opacity-10 text-medium-grey";
const activeStyle = "text-white";

const RatingScores = () => {
  const { ratingScore, setRatingScore } = useContext(RatingScoreContext);

  return (
    <div className="flex justify-between w-full">
      {ratingNums.map((ratingNum) => {
        return (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: ratingNum * 0.2 }}
            key={`rating-score-${ratingNum}`}
          >
            <Circle
              extraClassName={clsx(
                "cursor-pointer hover:bg-orange-500 hover:text-white",
                ratingNum === ratingScore ? activeStyle : deafultStyle
              )}
              onClickHandler={() => {
                setRatingScore(ratingNum);
              }}
            >
              <h1 className="font-bold text-sm absolute-center pt-0.5">
                {ratingNum}
              </h1>
            </Circle>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RatingScores;
