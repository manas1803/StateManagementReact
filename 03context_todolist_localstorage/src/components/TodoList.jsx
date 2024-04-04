import React from "react";
import { useTodo } from "../context/todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="todolist-container">
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
};
