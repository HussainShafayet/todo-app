import React, { useState } from 'react';
import './App.css';
import Column from './components/Column';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const initialTodos = [
    { id: 1, title: "Admin Panel Test Cases", description: "Description for Admin Panel Test Cases", status: 'New' },
    { id: 2, title: "Seller Panel Test Cases", description: "Description for Seller Panel Test Cases", status: 'New' },
    { id: 3, title: "Sales Manager Panel", description: "Description for Sales Manager Panel", status: 'New' },
    { id: 4, title: "Customer Support & Operations", description: "Description for Customer Support & Operations", status: 'New' },
    { id: 5, title: "Shop Panel Test Cases", description: "Description for Shop Panel Test Cases", status: 'New' },
    { id: 6, title: "Questions", description: "Description for Questions", status: 'Ongoing' }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, status: 'New' };
    setTodos([...todos, newTodo]);
  };

  const moveTodo = (id, newStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: newStatus } : todo));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <AddTodoForm addTodo={addTodo} />
      <div className="flex justify-between w-full max-w-6xl">
        <Column title="New" todos={todos} moveTodo={moveTodo} />
        <Column title="Ongoing" todos={todos} moveTodo={moveTodo} />
        <Column title="Done" todos={todos} moveTodo={moveTodo} />
      </div>
    </div>
  );
};

export default App;
