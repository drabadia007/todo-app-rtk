import React, { useRef, useState } from "react";
import { BsSearch, BsPlus } from "react-icons/bs";
import TodoList from "./TodoList";
import FilteredButtons from "./FilteredButtons";
import { useDispatch } from "react-redux";
import { addTodo, setChangedSearchTerm } from "../app/todo/todoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../context";

const Todo = () => {
  const [text, setText] = useState("");
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { notify } = useGlobalContext();

  const handleAddTodo = (e, text) => {
    e.preventDefault();
    // console.log(text);
    if (text.trim(" ")) {
      dispatch(addTodo(text));
      setText("");
      notify("success", "Todo item added.");
    } else {
      notify("warning", "empty todo not accepted");
    }
  };

  const handleSearchChange = () => {
    dispatch(setChangedSearchTerm(searchRef.current.value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      <form
        className="flex items-center mb-4"
        onSubmit={(e) => handleAddTodo(e, text)}
      >
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          // onClick={handleAddTodoClick}
          type="submit"
        >
          <BsPlus size={20} />
        </button>
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilteredButtons />
        <div className="flex items-center mb-4">
          <input
            ref={searchRef}
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            // value={searchValue}
            onChange={handleSearchChange}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
