import styled from 'styled-components';

export const Movies = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: start;
`;

export const MoviesItem = styled.li`
  list-style: none;
`;

export const MovieCard = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  max-height: 500px;

  gap: 40px;
`;

export const MovieInfo = styled.div`
  flex-direction: column;
  justify-content: start;
`;

export const AddInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const ReviewList = styled.ul`
  margin-top: 40px;
  list-style: none;
`;

export const CastList = styled.ul`
  margin-top: 40px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
