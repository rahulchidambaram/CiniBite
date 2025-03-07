import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { poster_path, title, overview, vote_average, release_date, id } =
    movie;
  return (
    <NavLink
      to={`/movie/${id}`}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 text-sm mb-4 line-clamp-7">{overview}</p>
          <div className="flex justify-between items-center">
            <span className="text-yellow-400 text-sm">
              ⭐ {vote_average.toFixed(1)}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(release_date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
