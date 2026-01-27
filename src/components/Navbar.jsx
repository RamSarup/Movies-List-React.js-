import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ favCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movies List</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">
          Favorites {favCount > 0 && <span className="badge">{favCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
