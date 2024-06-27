import React from 'react';
import TodoItem from './TodoItem';
import {FaEllipsisH } from 'react-icons/fa';

const Column = ({ title, todos, moveTodo, handleFormShow }) => {
  const filteredTodos = todos.filter(todo => todo.status === title);

  return (
    <div className="flex flex-col w-1/3 p-4 border border-gray-300 rounded-lg m-2 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <FaEllipsisH className="text-gray-400" />
      </div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} moveTodo={moveTodo} />
      ))}
      {title === 'New' && <div className="text-blue-500 cursor-pointer mt-4"  onClick={() => handleFormShow()}>+ Add a card</div>}
    </div>
  );
};

export default Column;
