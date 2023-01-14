import api from 'components/api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PopularMovies } from './HomeMoviesList.styled';

export function HomeMovieList() {
  const [trendingMovies, setTrending] = useState([]);
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
    <PopularMovies>
      Trending this week!
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
    </PopularMovies>
  );
}
