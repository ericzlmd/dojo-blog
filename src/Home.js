import { useEffect, useState } from 'react';
import BlogList from './BlogList';

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

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          // console.log(res);
          if (!res.ok) {
            throw Error('Could not fetch data from resource!');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []); // useEffect dependancy

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
