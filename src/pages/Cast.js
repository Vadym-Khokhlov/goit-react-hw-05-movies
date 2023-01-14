import api from 'components/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await api.fetchCast(Number(movieId));
        setCast(cast);
        console.log(cast);
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
    </section>
  );
};
