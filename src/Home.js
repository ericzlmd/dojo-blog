import BlogList from './BlogList';
import useFetch from './useFetch';

// eslint-disable-next-line no-lone-blocks
{
  /*
   * We're gonna be using json-server, instead of creating a db from scratch.
   * Run command 👇
   *
   * $ npx json-server --watch data/db.json --port 8000
   *
   * 'http://localhost:8000/blogs'
   *
   * ENDPOINTS:
   * /blogs         GET       Fetch all blogs
   * /blogs/{id}    GET       Fetch a single blog
   * /blogs         POST      Add a new blog
   * /blogs/{id}    DELETE    Delete a blog
   */
}

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
