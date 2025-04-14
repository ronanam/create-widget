import React, { useEffect, useState } from "react";

const MyWidget = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>My React Widget</h2>
      <p>Todos from JSONPlaceholder:</p>
      <ul>
        {todos.length === 0 ? (
          <li>Loading...</li>
        ) : (
          todos.slice(0, 10).map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title} {todo.completed ? "✅" : ""}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MyWidget;
