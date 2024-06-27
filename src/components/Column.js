import React from 'react';
import TodoItem from './TodoItem';

const Column = ({ title, todos, moveTodo }) => {
  const filteredTodos = todos.filter(todo => todo.status === title);

  return (
    <div className="flex flex-col w-1/3 p-4 border border-gray-300 rounded-lg m-2 shadow-sm">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} moveTodo={moveTodo} />
      ))}
      {title === 'New' && <div className="text-blue-500 cursor-pointer mt-4">+ Add a card</div>}
    </div>
  );
};

export default Column;
