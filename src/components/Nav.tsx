import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="shadow-card sticky top-0 box-border flex h-1/18 items-center justify-between gap-3 bg-white px-10 py-5 dark:bg-gray-950">
      <div className="flex h-full flex-col items-center">
        <h1 className="flex h-full items-center text-4xl">
          <span>Free</span>
          <span className="text-yellow-400">is</span>
          <span>Fun</span>
        </h1>
      </div>
      <ul className="flex gap-10 text-xl uppercase *:hover:opacity-50">
        <li>
          <Link to="/" className="flex items-center gap-1">
            <i className="material-icons">home</i>Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="flex items-center gap-1">
            <i className="material-icons">search</i>Search
          </Link>
        </li>
        <li>
          <Link to="/slots" className="flex items-center gap-1">
            <i className="material-icons">casino</i>Slots
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
