import "./index.css";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// /movie/now_playing?api_key=320e98ad7d68fc350d3251e5030ca127
export function Home() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      const { data } = await api.get("movie/now_playing", {
        params: {
          api_key: "320e98ad7d68fc350d3251e5030ca127",
          leguages: "pt-BR",
          page: 1,
        },
      });
      console.log("aqui", data.results.slice(0, 10));
      setMovie(data.results.slice(0, 10));
      setLoading(false);
    }
    loadMovie();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="list-movies">
        {movie.map((film) => (
          <article key={film.id}>
            <strong>{film.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            />
            <Link to={`/movies/${film.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
