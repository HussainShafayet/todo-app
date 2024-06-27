import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="flex flex-col mb-6 w-full max-w-6xl" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="mb-2 p-2 border rounded-lg"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="mb-2 p-2 border rounded-lg"
      ></textarea>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
