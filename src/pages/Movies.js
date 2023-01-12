import MovieSearch from 'components/SearchMoviesList/MovieSearchForm';
import React, { useState, useEffect } from 'react';
import api from '../components/api';
import { MovieList } from '../components/SearchMoviesList/MovieList';
import { Outlet, Link } from 'react-router-dom';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function findMovies(query) {
      if (!query) {
        return;
      }

      setIsLoading(true);
      try {
        const moviesData = await api.fetchMoviesByName(query, page);
        if (moviesData.total_results === 0) {
          setError('Nothing was found, try again');
          return;
        }

        setMovies(prevState => [...prevState, ...moviesData.results]);
        setTotalHits(moviesData.total_results);
        setError('');
      } catch (error) {
        setError('Houston, we have a problem:) try to reload the page');
      } finally {
        setIsLoading(false);
      }
    }
    findMovies(search);
  }, [page, search]);

  const handleFormSubmit = search => {
    setSearch(search);
    setMovies([]);
    setPage(1);
  };

  return (
    <main>
      <h1>Movies page</h1>
      <MovieSearch onSubmit={handleFormSubmit} />
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}

        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </main>
  );
};
