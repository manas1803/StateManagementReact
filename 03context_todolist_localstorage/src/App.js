import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoProvider } from "./context/todo";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  console.log("Todfos are ", todos);

  const addTodo = (todoTitle) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), taskTitle: todoTitle, isComplete: false },
    ]);
  };

  const updateTodo = (id, todoTitle) => {};

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleCompleteTodo = (id) => {};
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleCompleteTodo }}
    >
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
