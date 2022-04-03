import clsx from "clsx";

const Circle = ({ children, extraClassName, onClickHandler }) => {
  return (
    <div
      className={clsx(
        "bg-light-grey rounded-full w-10 aspect-square relative select-none",
        extraClassName
      )}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default Circle;
