import api from 'services/api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeHeading,
  MovieTitle,
  TrendingInfo,
  TrendingItem,
  TrendingList,
} from '../components/HomeMoviesList/HomeMoviesList.styled';
import { useLocation } from 'react-router-dom';
import { VscFlame } from 'react-icons/vsc';

function Home() {
  const [trendingMovies, setTrending] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

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
            {trendingMovies.length &&
              trendingMovies.map(movie => (
                <TrendingItem key={movie.id}>
                  <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    <TrendingInfo>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                      />

                      <MovieTitle>{movie.title}</MovieTitle>
                    </TrendingInfo>
                  </Link>
                </TrendingItem>
              ))}
          </TrendingList>
        </>
      )}
    </>
  );
}

export default Home;
