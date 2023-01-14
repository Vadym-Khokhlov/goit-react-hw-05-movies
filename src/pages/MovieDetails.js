import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from '../components/BackLink';

import api from 'components/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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

  if (!movie) {
    return;
  }

  const { id, poster_path, title, overview, genres } = movie;

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt=""
            />
            <h2>{title}</h2>
            <h2>Genres:</h2>
            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
            <p>{overview}</p>
          </div>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="review">Review</Link>
            <Outlet />
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
