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
          <Circle
            key={`rating-score-${ratingNum}`}
            extraClassName={clsx(
              "cursor-pointer",
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
        );
      })}
    </div>
  );
};

export default RatingScores;
