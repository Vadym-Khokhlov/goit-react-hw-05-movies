import api from 'services/api';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { HomeHeading, TrendingList } from './HomeMoviesList.styled';
import { VscFlame } from 'react-icons/vsc';

function HomeMovieList() {
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
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <HomeHeading>
            Trending! <VscFlame color="red" />
          </HomeHeading>
          <TrendingList>
            {trendingMovies &&
              trendingMovies.map(movie => (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                    />

                    <p>{movie.title}</p>
                  </Link>
                </li>
              ))}
          </TrendingList>
        </>
      )}
    </>
  );
}

export default HomeMovieList;
