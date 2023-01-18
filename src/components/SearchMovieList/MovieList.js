import { Movies, MoviesItem } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  if (movies === null) {
    return;
  }

  return (
    <>
      <Movies>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <h2>{movie.title}</h2>
            </Link>
          </MoviesItem>
        ))}
      </Movies>
    </>
  );
};

export default MovieList;
