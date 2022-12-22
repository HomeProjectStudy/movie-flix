import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./index.css";

export function Favorites() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movieFlix");
    setMovie(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let moviesFiltered = movie.filter((item) => item.id !== id);
    setMovie(moviesFiltered);
    localStorage.setItem("@movieFlix", JSON.stringify(moviesFiltered));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <div className="my-movies">
      <h1>Meus Filmes</h1>
      <ul>
        {movie.map((film) => (
          <li key={film.id}>
            <span>{film.title}</span>
            <div>
              <Link to={`/movies/${film.id}`}> Ver detalhes</Link>
              <button onClick={() => deleteMovie(film.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
