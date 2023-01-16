import api from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/SearchMovieList/MoviesList.styled';

const Cast = () => {
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await api.fetchCast(Number(movieId));
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    }
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <section>
      <CastList>
        {error ? (
          <p>{error}</p>
        ) : (
          cast.map(({ cast_id, original_name, character, profile_path }) => (
            <li key={cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </CastList>
    </section>
  );
};

export default Cast;
