import Circle from "./Circle";

const ratingNums = [1, 2, 3, 4, 5];

const RatingScores = () => {
  return (
    <div className="flex justify-between w-full">
      {ratingNums.map((ratingNum) => {
        return (
          <Circle
            key={`rating-score-${ratingNum}`}
            extraClassName="cursor-pointer"
          >
            <h1
              className="text-medium-grey font-bold
                         text-sm absolute-center"
            >
              {ratingNum}
            </h1>
          </Circle>
        );
      })}
    </div>
  );
};

export default RatingScores;
