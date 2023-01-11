import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { BackLink } from "../components/BackLink";

import api from 'components/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');

  const { id } = useParams();
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMoviesById() {
      try {
        const movie = await api.fetchMoviesById(Number(id));
        setMovie(movie);
      } catch (error) {
        setError(error);
      }
    }
    getMoviesById();
  }, [id]);

  if (!movie) {
    return;
  }

  return (
    <main>
      <div key={movie.id}>
        <img src={movie.poster_path} alt="" />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
      {/* <BackLink to={backLinkHref}>Back to movies</BackLink> */}
    </main>
  );
};

export default MovieDetails;
