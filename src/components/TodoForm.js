// components/TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState(""); // State to store the input value

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo); // Call addTodo function passed as a prop
      setNewTodo(""); // Clear input field after adding
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
