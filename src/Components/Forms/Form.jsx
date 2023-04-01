import React, { useContext } from "react";
import {
  ArrowUturnLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FormContext, FormHeader } from "../Context/Context";

const Form = () => {
  const GlobalFormContext = useContext(FormContext);
  const dispatch = GlobalFormContext.dispatch;
  const NextPage = () => {
    dispatch({ type: "NEXT", payload: Page });
  };
  return (
    <div className="Form">
      <div className="Form_container">
        <div className="header">
          <h1>{FormHeader}</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button className="w-2 h-2">
            <ArrowUturnLeftIcon className="w-5 h-5" />
            Back
          </button>
        </div>
        <div>
          <button onClick={NextPage}>
            <ArrowRightIcon className="w-5 h-5" />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
