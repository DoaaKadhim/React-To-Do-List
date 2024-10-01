// components/TodoList.js
import React, { useState } from "react";

const TodoList = ({ todos, dispatch }) => {
  const [editMode, setEditMode] = useState(null); // State to track the todo being edited
  const [editText, setEditText] = useState(""); // State to track the text input for editing

  // Handle entering edit mode
  const editTodoHandler = (id, currentText) => {
    setEditMode(id);
    setEditText(currentText);
  };

  // Handle saving the edited todo
  const saveEditHandler = (id) => {
    if (editText.trim()) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id, newTitle: editText },
      });
      setEditMode(null); // Exit edit mode
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            className="checkbox"
          />

          {/* Show edit input field if the todo is in edit mode */}
          {editMode === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button
                onClick={() => saveEditHandler(todo.id)}
                className="save-button"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(null)}
                className="cancel-button"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {/* Display the todo item */}
              <span
                className={`todo-title ${todo.completed ? "completed" : ""}`}
              >
                {todo.title}
              </span>
              <button
                onClick={() => editTodoHandler(todo.id, todo.title)}
                className="edit-button"
              >
                Edit
              </button>
            </>
          )}

          {/* Delete button, only enabled if the todo is completed */}
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            disabled={!todo.completed}
            className="delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
