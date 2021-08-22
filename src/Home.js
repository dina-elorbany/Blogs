import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import data from "./data/db.json";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((response) => response.json())
  //     .then((data) => setBlogs(data));
  // }, []);

  useEffect(() => {
    // setBlogs(data);
    console.log(data);
  }, []);

  // const openFullPost = () => {};

  return (
    <div className="container">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      <hr />

      {blogs &&
        {
          /* <BlogList
          blogs={blogs.filter((blog) => blog.author === "Mario")}
          title="All Mario's Blogs!"
          readMore={openFullPost}
        /> */
        }}
    </div>
  );
};

export default Home;
