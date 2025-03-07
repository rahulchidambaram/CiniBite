import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Extract movie ID from the URL
  const { data: movie, isLoading } = useMovieDetails(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="4em" />
      </div>
    );
  }

  // If there's no movie data, show a fallback message
  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Movie not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Backdrop Image */}
      <div
        className="relative h-[700px] sm:h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex justify-center w-full lg:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Basic Info */}
          <div className="w-full md:w-2/3 flex flex-col gap-3">
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            <p className="text-gray-400 mb-4">
              {movie.tagline || "No tagline available"}
            </p>
            <p className="text-gray-300 mb-4">
              {movie.overview || "No overview available"}
            </p>

            {/* Ratings and Release Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-yellow-400 text-2xl">
                ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
              </span>
              <span className="text-gray-400 text-sm">
                ({movie.vote_count || 0} votes)
              </span>
              <span className="text-gray-400 text-sm">
                Release Date:{" "}
                {movie.release_date
                  ? new Date(movie.release_date).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

            {/* Genres */}
            <h3 className="text-xl font-bold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              )) || "No genres available"}
            </div>

            {/* Runtime */}
            <p className="text-gray-400 mb-4">
              Runtime: {movie.runtime || "N/A"} minutes
            </p>

            {/* Spoken Languages */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Spoken Languages</h3>
              <div className="flex flex-wrap gap-2">
                {movie.spoken_languages?.map((language) => (
                  <span
                    key={language.iso_639_1}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {language.english_name}
                  </span>
                )) || "No spoken languages available"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
