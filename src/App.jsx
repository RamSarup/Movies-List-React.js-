import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import "./CSS/App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie];
    });
  };

  return (
    <>
      <Navbar favCount={favorites.length} />
      <main className="main_content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorite
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
