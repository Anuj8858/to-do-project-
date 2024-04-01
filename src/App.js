import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-heading">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
                className="checkbox"
              />
            </div>
            <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
