import React, { useState } from 'react';
import './App.css';
import Column from './components/Column';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const initialTodos = [
    { id: 1, title: "Admin Panel Test Cases", description: "Description for Admin Panel Test Cases", status: 'New', attachments: 1, tags: 8 },
    { id: 2, title: "Seller Panel Test Cases", description: "Description for Seller Panel Test Cases", status: 'New', attachments: 0, tags: 40 },
    { id: 3, title: "Sales Manager Panel", description: "Description for Sales Manager Panel", status: 'New', attachments: 1, tags: 41 },
    { id: 4, title: "Customer Support & Operations", description: "Description for Customer Support & Operations", status: 'New', attachments: 0, tags: 43 },
    { id: 5, title: "Shop Panel Test Cases", description: "Description for Shop Panel Test Cases", status: 'New', attachments: 1, tags: 13 },
    { id: 6, title: "Questions", description: "Description for Questions", status: 'Ongoing', attachments: 0, tags: 1115, dueDate: new Date(Date.now() + 86400000) } 
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, status: 'New' };
    setTodos([newTodo, ...todos]);
    handleFormShow();
  };

  const moveTodo = (id, newStatus, dueDate = null) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: newStatus, dueDate } : todo
    ));
  };

  const handleFormShow = ()=>{
    setShowAddTodoForm(!showAddTodoForm)
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {showAddTodoForm && <AddTodoForm addTodo={addTodo} /> }
      <div className="flex justify-between w-full max-w-6xl">
        <Column title="New" todos={todos} moveTodo={moveTodo} handleFormShow={handleFormShow}/>
        <Column title="Ongoing" todos={todos} moveTodo={moveTodo} handleFormShow={handleFormShow} />
        <Column title="Done" todos={todos} moveTodo={moveTodo} handleFormShow={handleFormShow}/>
      </div>
    </div>
  );
};

export default App;
