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
  justify-content: start;
  height: auto;
  max-width: 1000px;
  gap: 40px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddList = styled.div`
  display: flex;
  gap: 20px;
`;

export const ReviewList = styled.ul`
  margin-top: 40px;
  list-style: none;
`;
