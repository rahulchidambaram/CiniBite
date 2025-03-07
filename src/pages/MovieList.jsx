import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import useFetch from "../hooks/useFetch";

const MovieList = ({ apiPath }) => {
  const [title, setTitle] = useState("Now Playing Movies");

  const { data: movies, isLoading } = useFetch(apiPath);

  useEffect(() => {
    switch (apiPath) {
      case "movie/popular":
        setTitle("Popular Movies");
        break;
      case "movie/top_rated":
        setTitle("Top Rated Movies");
        break;
      case "movie/upcoming":
        setTitle("Upcoming Movies");
        break;
      default:
        setTitle("Now Playing Movies");
        break;
    }
  }, [apiPath]);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {isLoading && (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinner size="4em" />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold text-black mb-8">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieList;
