import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import NameForm from "./App";
import EssayForm from "./Essayform";
import FlaworForm from "./Flaworform";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameForm />
    {<EssayForm />}
    {<FlaworForm/>}
  </React.StrictMode>
);

