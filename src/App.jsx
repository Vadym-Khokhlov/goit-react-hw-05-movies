import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SharedLayout from './components/SharedLayout';
import { NotFound } from 'pages/NotFound';

const HomeMovieList = lazy(() =>
  import('./components/HomeMoviesList/HomeMoviesList')
);
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Review = lazy(() => import('./components/Review/Review'));
const Cast = lazy(() => import('./components/Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<HomeMovieList />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
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

// to fix:

// error with old rendered movie list +
// style movie form overview +
// no movie default img -
// space in search +
// different size img in cast -
