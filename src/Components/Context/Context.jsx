import React, { createContext, useReducer } from "react";

export const FormContext = createContext();
export const FormHeader = ["Sign Up", "Personal Info", "Location", "Plans"];
const ContextProvider = ({ children }) => {
  const ContextState = (state, action) => {
    switch (action.type) {
      case "NEXT":
        const nextPage = state.Page + 1;
        if (nextPage.length > FormHeader.length) {
          return {Page:0};
        }
    }
  };
  const [state, dispatch] = useReducer(ContextState, FormHeader, { Page: 0 });
  const formInfo = { state, dispatch };
  return (
    <FormContext.Provider value={formInfo}>{children}</FormContext.Provider>
  );
};

export default ContextProvider;
