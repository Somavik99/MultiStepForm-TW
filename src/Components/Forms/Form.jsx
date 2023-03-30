import React, { useState } from "react";
import {
  ArrowUturnLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Form = () => {
  const [FormStep, setFormStep] = useState(0);
  const FormHeader = ["Sign Up", "Personal Info", "Location", "Plans"];
  return (
    <div className="Form">
      <div className="Form_container">
        <div className="header">
          <h1>{FormHeader[FormStep]}</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button className="w-2 h-2">
            <ArrowUturnLeftIcon className="w-5 h-5" />
            Back
          </button>
        </div>
        <div>
          <button>
            <ArrowRightIcon className="w-5 h-5" />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
