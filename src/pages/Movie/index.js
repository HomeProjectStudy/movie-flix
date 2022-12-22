import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "./index.css";

export function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  function favoriteMovie() {
    const myList = localStorage.getItem("@movieFlix");

    let myWishList = JSON.parse(myList) || [];

    const hasMovie = myWishList.some(
      (storageMovie) => storageMovie.id === movie.id
    );
    if (hasMovie) {
      toast.warn("Filme já existe na sua lista");
      return;
    }

    myWishList.push(movie);
    localStorage.setItem("@movieFlix", JSON.stringify(myWishList));
    toast.success("Filme salvo com sucesso");
  }
  useEffect(() => {
    async function loadDetailsMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "320e98ad7d68fc350d3251e5030ca127",
            leguages: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch((error) => {
          navigate("/", {
            replace: true,
          });
        });
    }

    loadDetailsMovie();

    return () => {};
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="movie-info">
        <h2>Carregando Filmes...</h2>
      </div>
    );
  }
  return (
    <div className="film-info">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      <h3>Sinopose</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="contain-buttons">
        <button onClick={favoriteMovie}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${movie.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
