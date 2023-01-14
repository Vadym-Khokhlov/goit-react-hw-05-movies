import React, { useState } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from './MoviesSearchForm.styled';

const MovieSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    const query = e.currentTarget.value.toLowerCase();
    setSearch(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchInput = search.trim().toLowerCase();
    if (searchInput === '') {
      alert('enter your query');
      return;
    }
    onSubmit(searchInput);
    setSearch('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="search"
        value={search}
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title"
        onChange={handleSearch}
      />
      <SearchButton type="submit">
        <span>Search</span>
      </SearchButton>
    </SearchForm>
  );
};

export default MovieSearch;
