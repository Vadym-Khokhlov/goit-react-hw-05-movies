import axios from 'axios';

const key = 'b84ac87767a32f4b7dddc0cfcc03fc4c';

const fetchMoviesByName = async (query, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

async function fetchHomepageMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function fetchMoviesById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  fetchMoviesByName,
  fetchHomepageMovies,
  fetchMoviesById,
};
