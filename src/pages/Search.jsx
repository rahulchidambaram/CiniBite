import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const { data: searchResults, isLoading } = useFetch(
    searchQuery ? `search/movie?query=${searchQuery}` : null
  );

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {isLoading && (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinner size="4em" />
          </div>
        )}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            {searchResults?.length === 0 && (
              <p className="text-gray-500">No movies found.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
