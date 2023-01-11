import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HomeMovieList } from './components/Home/HomeMoviesList';
import api from './components/api';
import MovieSearch from 'components/MoviesList/MovieSearchForm';
import { Link } from 'App.styled';
import { Header } from 'App.styled';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Movies } from 'pages/Movies';
import { Review } from 'components/Reviews/Review';
import { Cast } from 'components/Cast/Cast';
import MovieDetails from 'pages/MovieDetails';
import { MovieList } from 'components/MoviesList/MovieList';

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/search">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Movies />}>
          <Route path="search/review" element={<Review />} />
          <Route path="search/cast" element={<Cast />} />
        </Route>
        <Route path="search/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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
