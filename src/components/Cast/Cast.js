import api from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastCard,
  CastImage,
  CastInfo,
  CastList,
} from 'components/Cast/Cast.styled';
import { SlUser } from 'react-icons/sl';

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
            <CastCard key={cast_id}>
              {profile_path && (
                <CastImage
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={original_name}
                />
              )}
              {!profile_path && <SlUser size={240} color="silver" />}
              <CastInfo>{original_name}</CastInfo>
              <CastInfo>Character: {character}</CastInfo>
            </CastCard>
          ))
        )}
      </CastList>
    </section>
  );
};

export default Cast;
