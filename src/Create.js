import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('prevented default!');

    const blog = {
      title,
      body,
      author,
    };

    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;
