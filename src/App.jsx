import React from "react";
import "./App.css";
import ContextProvider from "./Components/Context/Context";
import Form from "./Components/Forms/Form";

function App() {
  return (
    <ContextProvider>
      <h1 className="text-3xl font-bold underline">Form</h1>
      <Form />
    </ContextProvider>
  );
}

export default App;
