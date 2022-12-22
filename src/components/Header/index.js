import { Link } from "react-router-dom";
import "./index.css";
export function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Movie Flix
      </Link>
      <Link to="/favorites" className="favorites">
        Meus Filmes
      </Link>
    </header>
  );
}
