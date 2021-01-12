import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  // const handleDelete = id => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  {
    /*
     * We're gonna be using json-server, instead of creating a db from scratch.
     * Run command 👇
     *
     * $ npx json-server --watch data/db.json --port 8000
     *
     * ENDPOINTS:
     * /blogs         GET       Fetch all blogs
     * /blogs/{id}    GET       Fetch a single blog
     * /blogs         POST      Add a new blog
     * /blogs/{id}    DELETE    Delete a blog
     */
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      });
  }, []); // useEffect dependancy

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      <p>{name}</p>
    </div>
  );
};

export default Home;
