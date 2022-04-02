const Circle = ({ children }) => {
  return (
    <div
      className="bg-white rounded-full
              w-9 aspect-square bg-opacity-10
              relative"
    >
      {children}
    </div>
  );
};

export default Circle;
