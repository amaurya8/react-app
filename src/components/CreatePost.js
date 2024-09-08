import React, { useState } from 'react';

const CreatePost = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random(),
      title,
      description,
      price,
      contactInfo,
    };
    onCreate(newPost);
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;