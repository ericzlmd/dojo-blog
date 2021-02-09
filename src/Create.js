import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form action="">
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
