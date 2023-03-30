import React, { createContext, useReducer } from "react";

export const FormContext = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(ContextState,);
  return <FormContext.Provider>{children}</FormContext.Provider>;
};

export default Context;
