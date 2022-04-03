import { createContext, useState } from "react";

const SubmitContext = createContext(null);

export const SubmitProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <SubmitContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </SubmitContext.Provider>
  );
};

export default SubmitContext;
