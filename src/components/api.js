import axios from 'axios';

const key = 'b84ac87767a32f4b7dddc0cfcc03fc4c';

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

const fetchMoviesById = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// fetchCast
const fetchCast = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};

// fetchReview
const fetchReview = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    );
    if (!response) {
      throw new Error("Sorry, something wrong's happened");
    }
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default {
  fetchHomepageMovies,
  fetchMoviesById,
  fetchMoviesByName,
  fetchReview,
  fetchCast,
};
