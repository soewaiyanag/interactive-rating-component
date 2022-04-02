import RatingScore from "./Circle";

const ratingNums = [1, 2, 3, 4, 5];

const RatingScores = () => {
  return (
    <div className="flex justify-between w-full">
      {ratingNums.map((ratingNum) => {
        return (
          <RatingScore key={`rating-score-${ratingNum}`}>
            <h1 className="text-medium-grey font-medium text-sm absolute-center">
              {ratingNum}
            </h1>
          </RatingScore>
        );
      })}
    </div>
  );
};

export default RatingScores;
