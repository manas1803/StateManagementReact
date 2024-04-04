import React, { useState } from "react";
import { useTodo } from "../context/todo";

export const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { addTodo } = useTodo();
  const handleAddTodos = (e) => {
    e.preventDefault();
    addTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <div className="form-container">
      <div className="todo-input">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.currentTarget.value)}
        />
      </div>
      <div className="todo-button">
        <button onClick={handleAddTodos}>Add</button>
      </div>
    </div>
  );
};
