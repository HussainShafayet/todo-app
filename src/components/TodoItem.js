import React, { useState } from 'react';

const TodoItem = ({ todo, moveTodo }) => {
  const { id, title, description, status } = todo;
  const [showMenu, setShowMenu] = useState(false);

  const getNextStatusOptions = () => {
    if (status === 'New') return ['Ongoing', 'Done'];
    if (status === 'Ongoing') return ['New', 'Done'];
    if (status === 'Done') return ['New', 'Ongoing'];
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleMove = (newStatus) => {
    moveTodo(id, newStatus);
    setShowMenu(false);
  };

  const getStatusColor = () => {
    if (status === 'New') return 'border-blue-500';
    if (status === 'Ongoing') return 'border-orange-500';
    if (status === 'Done') return 'border-green-500';
  };

  return (
    <div className={`relative p-4 mb-2 border-l-4 rounded-lg bg-white shadow-sm ${getStatusColor()}`} onContextMenu={handleRightClick}>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      {showMenu && (
        <div className="absolute top-0 left-0 mt-10 bg-white border rounded-lg shadow-lg z-10">
          {getNextStatusOptions().map(option => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleMove(option)}>
              Move to {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
