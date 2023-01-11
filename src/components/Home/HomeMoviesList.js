import api from 'components/api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function HomeMovieList() {
  const [trendingMovies, setTrending] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const trending = await api.fetchHomepageMovies();
        setTrending(trending);
      } catch (error) {
        setError(error);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <ul>
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`search/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
