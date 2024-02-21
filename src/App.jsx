import React from "react";
import Todo from "./components/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Todo />
      <ToastContainer position="top-center" autoClose="1500" />
    </div>
  );
};

export default App;
