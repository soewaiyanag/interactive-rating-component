import starIcon from "../images/icon-star.svg";
import Circle from "./Circle";

const Star = () => {
  return (
    <Circle>
      <img src={starIcon} alt="star icon" className="w-3 absolute-center" />
    </Circle>
  );
};

export default Star;
