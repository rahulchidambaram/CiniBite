import { Routes, Route } from "react-router-dom";
import {
  MovieList,
  MovieDetails,
  Search,
  PageNotFound,
  AuthPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />

      <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
      <Route path="movie/search" element={<Search />} />
      <Route
        path="movies/popular"
        element={<MovieList apiPath="movie/popular" />}
      />
      <Route
        path="movies/top_rated"
        element={<MovieList apiPath="movie/top_rated" />}
      />
      <Route
        path="movies/upcoming"
        element={<MovieList apiPath="movie/upcoming" />}
      />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
