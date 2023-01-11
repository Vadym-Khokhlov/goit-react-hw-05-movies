import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 15px;
  font-style: italic;
`;

export const SearchButton = styled.button`
  padding: 10px;
  color: lavender;
  background-color: chocolate;
  border-radius: 25px;
  border: none;
  font: inherit;
  cursor: pointer;
  /* &.hover {
    background-color: blue;
  } */
`;

export const SearchInput = styled.input`
  padding: 10px;
  color: chocolate;
  background-color: lavender;
  border-radius: 25px;
  border: none;
  font: inherit;
  margin-right: 10px;
  margin-left: 20px;
`;
