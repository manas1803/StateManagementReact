import React from "react";
import { useTodo } from "../context/todo";

export const TodoItem = ({ todo }) => {
  const { removeTodo } = useTodo();
  const handleRemove = (e) => {
    e.preventDefault();
    removeTodo(todo.id);
  };

  return (
    <div className="todo-list" key={todo.id}>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <li>{todo.taskTitle}</li>
      </div>
      <div>
        <button>Edit</button>
      </div>
      <div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};
