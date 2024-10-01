// App.js
import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css"; // Importing the CSS styles

// Initial state with pre-defined todos
const initialTodos = [
  {
    userId: 1,
    id: 1,
    title: "Home work",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Class work",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "Meeting",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "Reply To Emails",
    completed: true,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },

];

// Reducer function to manage the todo actions
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.newTitle }
          : todo
      );
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Render the TodoForm component */}
      <TodoForm
        addTodo={(newTodo) => dispatch({ type: "ADD_TODO", payload: newTodo })}
      />

      {/* Render the TodoList component */}
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
