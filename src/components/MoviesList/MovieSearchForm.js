import React, { useState } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from './MoviesSearchForm.styled';
// import '../styles.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
        className="SearchForm-input"
        type="text"
        name="search"
        value={search}
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title"
        onChange={handleSearch}
      />
      <SearchButton type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </SearchButton>
    </SearchForm>
  );
};

export default MovieSearch;
