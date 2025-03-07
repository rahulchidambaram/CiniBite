import { useEffect, useState } from "react";
import { options } from "../utils/options";

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!apiPath) return;

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${apiPath}`,
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [apiPath]);

  return { data, isLoading };
};

export default useFetch;
