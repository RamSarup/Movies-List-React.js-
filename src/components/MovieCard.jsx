import "../CSS/MovieCard.css";

const MovieCard = ({ movie, isFav, toggleFavorite }) => {
  return (
    <div className="movieCard">
      <div className="movie_poster">
        <button
          className="like"
          onClick={() => toggleFavorite(movie)}
          style={{
            cursor: "pointer",
            background: "transparent",
            border: "none",
            fontSize: "22px",
          }}
        >
          {isFav ? "❤️" : "🤍"}
        </button>

        <img
          src={movie.image?.medium || "https://via.placeholder.com/210x295"}
          alt={movie.name}
        />
      </div>

      <div className="movie_info">
        <h5>{movie.name}</h5>
        <p>{movie.premiered || "Unknown"}</p>
      </div>
    </div>
  );
};

export default MovieCard;
