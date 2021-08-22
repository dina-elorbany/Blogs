import { BrowserRouter, NavLink } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <BrowserRouter>
      <div className="blog__list">
        <h1 className="text-center py-3">{title}</h1>
        <div className="blogs">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog">
              <h2 className="blog__title mt-3">{blog.title}</h2>
              <pre>
                <small className="likes">
                  <i className="fa fa-heart"></i> {blog.likes} likes..
                </small>
              </pre>
              <p>{blog.body.slice(0, 100)}...</p>
              <NavLink to="" className="btn btn-info">
                Read more...
              </NavLink>

              <button className="btn btn-danger m-2">Delete Blog</button>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default BlogList;
