import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
`;

export const CastCard = styled.li`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: auto;
  padding: 5px 10px;
  /* border: 3px solid yellowgreen; */
  border-radius: 0px 0px 14px 14px;
`;

export const CastImage = styled.img`
  max-width: 100%;
  height: 300;
`;

export const CastInfo = styled.p`
  margin: 0;
  padding: 0;
`;
