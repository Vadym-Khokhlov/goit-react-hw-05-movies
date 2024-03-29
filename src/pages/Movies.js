import MovieSearch from 'components/SearchForm/MovieSearchForm';
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import MovieList from '../components/SearchMovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function findMovies(query) {
      setIsLoading(true);
      try {
        const movies = await api.fetchMoviesByName(query, 1);

        if (movies.total_results === 0) {
          setMovies([]);
          setError('Nothing was found, try again');
          return;
        }

        setMovies(movies.results);
        setError('');
      } catch (error) {
        setError('Houston, we have a problem:) try to reload the page');
      } finally {
        setIsLoading(false);
      }
    }
    findMovies(query);
  }, [query]);

  const handleFormSubmit = newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <main>
      <>
        <MovieSearch onSubmit={handleFormSubmit} />
        <div>
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}

          {movies !== 0 && <MovieList movies={movies} />}
        </div>
      </>
    </main>
  );
};

export default Movies;
