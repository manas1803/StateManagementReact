import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      taskTitle: "Task",
      isComplete: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
  toggleCompleteTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
