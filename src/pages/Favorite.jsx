import "../CSS/Favorites.css";

const Favorite = ({ favorites, toggleFavorite }) => {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorites</h2>
        <p>Add movies to see them here</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      <div className="movies_grid">
        {favorites.map((movie) => (
          <div className="movieCard" key={movie.id}>
            <div className="movie_poster">
              <button
                className="like liked"
                onClick={() => toggleFavorite(movie)}
                title="Remove from favorites"
              >
                ❌
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
        ))}
      </div>
    </div>
  );
};

export default Favorite;
