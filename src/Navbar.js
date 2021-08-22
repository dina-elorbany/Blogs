import { BrowserRouter, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1 className="blog__title">Dojo Blog</h1>
        <div className="links">
          <NavLink exact to="/" className="btn btn-light link">
            Home
          </NavLink>
          <NavLink to="/create" className="btn btn-success link">
            New Blog
          </NavLink>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Home;
