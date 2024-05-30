import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href={"/post"}>Post</a>
        </li>
        <li>
          <a href={"/about"}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
