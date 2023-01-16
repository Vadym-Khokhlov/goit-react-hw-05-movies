import styled from 'styled-components';

// export const MoviesTitle = styled.h2`
//   margin-left: 20px;
//   font-size: 30px;
//   color: goldenrod;
//   text-align: center;
// `;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 15px;
`;

export const SearchButton = styled.button`
  padding: 10px;
  color: lavender;
  background: linear-gradient(to bottom, #192bec, #caff00);
  border-radius: 25px;
  border: none;
  font: inherit;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 10px;
  color: chocolate;
  background-color: lavender;
  border-radius: 25px;
  border: 1px solid khaki;
  font: inherit;
  font-style: italic;
  margin-right: 10px;
  margin-left: 20px;
  &:focus {
    color: blueviolet;
    outline: none;
  }
`;
