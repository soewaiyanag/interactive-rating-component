import { createContext, useState } from "react";

const RatingScoreContext = createContext(null);

export const RatingScoreProvider = ({ children }) => {
  const [ratingScore, setRatingScore] = useState(null);
  return (
    <RatingScoreContext.Provider value={{ ratingScore, setRatingScore }}>
      {children}
    </RatingScoreContext.Provider>
  );
};

export default RatingScoreContext;
