import { createSlice } from "@reduxjs/toolkit";

const initialTodos =
  localStorage.getItem("todos") === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos,
    filter: "ALL",
    searchTerm: "",
  },
  reducers: {
    // add todo
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          todoText: action.payload,
          id: new Date().getTime().toString(),
          completed: false,
        },
      ];

      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((item) => item))
      );
    },

    // remove todo
    removeTodo: (state, action) => {
      const updatedTodos = state.todos.filter(
        (item) => item.id != action.payload
      );
      state.todos = updatedTodos;
    },

    // toggle completed Value
    toggleCompleted: (state, action) => {
      const updatedTodos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      state.todos = updatedTodos;
    },

    // set the changed searched value
    setChangedSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // set the changed Filter term
    setChangedFilterTerm: (state, action) => {
      state.filter = action.payload;
    },

    // set all todos completed
    setMarkedAllTrue: (state, action) => {
      state.todos = state.todos.map((item) => ({ ...item, completed: true }));
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleCompleted,
  setChangedSearchTerm,
  setChangedFilterTerm,
  setMarkedAllTrue,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
