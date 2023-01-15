import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from '../components/BackLink';

import api from 'components/api';

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

  const { id, name, poster_path, title, overview, genres } = movie;
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
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={name}
            />
            <h2>{title}</h2>
            <h2>Genres:</h2>
            <p>{poster_path}</p>
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
