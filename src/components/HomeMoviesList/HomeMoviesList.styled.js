import styled from 'styled-components';

export const HomeHeading = styled.h2`
  text-align: center;
  color: red;
  font-size: 30px;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

export const TrendingItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
`;

export const TrendingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieTitle = styled.p`
  text-align: center;
`;
