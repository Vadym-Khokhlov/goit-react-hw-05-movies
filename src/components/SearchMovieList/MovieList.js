import { Movies } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <Movies>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </Movies>
    </>
  );
};

export default MovieList;
