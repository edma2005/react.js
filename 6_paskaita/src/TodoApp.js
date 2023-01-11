import { useState } from "react";
import React from 'react';

const mockTodos = [
  {id: 1, title: "learn how to delete"}, 
  {id: 2, title: "learn how to use inputs"},
];

const TodoApp = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setTodoText(value);
  }

  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExists = todos.some((todo) => todo.title === title);
    
    if (title && !alreadyExists) {
    const newTodo = {id: Date.now(), title}
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTodoText("")
  }
  }

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <ul>
        {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{""}
          <strong 
          className="delete-button" 
          onClick={() => handleDeleteTodo(todo.id)}>
            X
            </strong>
        </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleChange}/>
      <button onClick={handleAddTodo}>Add</button>
      <p>{todoText}</p>
    </div>
  )
}

export default TodoApp