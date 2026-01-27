import { useEffect, useState } from "react";
import MoviesCard from "../components/MovieCard";
import "../CSS/Home.css";

const Home = ({ favorites, toggleFavorite }) => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getPopular = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://api.tvmaze.com/shows?page=0");
      if (!response.ok) throw new Error("Server Error");
      const data = await response.json();
      setApi(data);
    } catch (err) {
      setError(err.message || "API Error");
    } finally {
      setLoading(false);
    }
  };

  const searchData = async (query) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      if (!response.ok) throw new Error("Server Error");

      const data = await response.json();
      if (data.length === 0) {
        setApi([]);
        setError("No movies found");
        return;
      }

      setApi(data.map((item) => item.show));
    } catch (err) {
      setError(err.message || "API Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuerry.trim() !== "") {
      searchData(searchQuerry);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="search_form">
        <input
          type="text"
          placeholder="Search Movies ...."
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
        />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies_grid">
        {api.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            isFav={favorites.some((m) => m.id === movie.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
