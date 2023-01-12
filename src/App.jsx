import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HomeMovieList } from './components/HomeMoviesList/HomeMoviesList';
import api from './components/api';
import MovieSearch from 'components/SearchMoviesList/MovieSearchForm';
import { Link } from 'App.styled';
import { Header } from 'App.styled';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Movies } from 'pages/Movies';
import { Review } from 'pages/Review';
import { Cast } from 'pages/Cast';
import MovieDetails from 'pages/MovieDetails';
import { MovieList } from 'components/SearchMoviesList/MovieList';
import SharedLayout from './components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Movies />} />

        <Route path="search/:id" element={<MovieDetails />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

//Routes:

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

//API :
// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
