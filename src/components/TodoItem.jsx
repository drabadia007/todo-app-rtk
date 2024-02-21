import React from "react";
// import {
//   toggleTodo,
//   removeTodo,
//   markCompleted,
//   markIncomplete,
// } from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../app/todo/todoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../context";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const { notify } = useGlobalContext();

  return (
    <>
      <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
          <span className="mr-4 text-gray-500 font-bold">{index + 1}.</span>
          <span
            className={`mr-4 font-bold capitalize ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.todoText}
          </span>
        </div>
        <div className="space-x-3 ml-8">
          <button
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(toggleCompleted(todo.id))}
          >
            {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
          </button>
          <button
            className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => {
              notify("error", "todo removed");
              dispatch(removeTodo(todo.id));
            }}
          >
            <FaTrash />
          </button>
          {!todo.completed && (
            <button
              className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={() => {
                notify("success", "Congrats one todo completed");
                dispatch(toggleCompleted(todo.id));
              }}
            >
              <FaCheck />
            </button>
          )}
          {todo.completed && (
            <button
              className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={() => dispatch(toggleCompleted(todo.id))}
            >
              <FaTimes />
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default TodoItem;
