import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from '../components/BackLink';
import { Suspense } from 'react';
import api from 'services/api';
import { ScrollLink } from 'react-scroll';
import {
  AddInfo,
  MovieCard,
  MovieInfo,
} from 'components/SearchMovieList/MoviesList.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMoviesById() {
      try {
        const movie = await api.fetchMoviesById(Number(movieId));
        setMovie(movie);
      } catch (error) {
        setError(error);
      }
    }
    getMoviesById();
  }, [movieId]);

  const {
    id,
    name,
    poster_path,
    title,
    overview,
    genres,
    release_date,
    vote_average,
  } = movie;
  const backLinkHref = location.state?.from ?? '/';

  if (!movie) {
    return;
  }

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <BackLink to={backLinkHref}>Back to movies</BackLink>

          <MovieCard key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={name}
            />
            <MovieInfo>
              <h2>
                {title}({release_date})
              </h2>
              <p>Users Score: {vote_average} </p>

              <h3>Overview:</h3>
              <p>{overview}</p>
              <h3>Genres:</h3>
              <ul>
                {genres &&
                  genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </ul>
              <h3> Additional information</h3>
              <AddInfo>
                <Link to="cast">Cast</Link>
                <Link to="review">Review</Link>
              </AddInfo>
            </MovieInfo>
          </MovieCard>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
