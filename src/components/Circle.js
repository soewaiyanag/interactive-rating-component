import clsx from "clsx";

const Circle = ({ children, extraClassName }) => {
  return (
    <div
      className={clsx(
        "bg-light-grey rounded-full w-10 aspect-square bg-opacity-10 relative",
        extraClassName
      )}
    >
      {children}
    </div>
  );
};

export default Circle;
