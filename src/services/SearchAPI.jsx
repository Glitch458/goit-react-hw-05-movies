const API_KEY = '69b30f08747afc25079469dc0aa7469d';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const TrendingSearchAPI = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`).then(
    res => res.json().then(res => res.results)
  );
};

export const MovieIdAPI = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
};

export const MovieSearchAPI = searchName => {
  return fetch(
    `${BASE_URL}/search/movie?query=${searchName}&api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => res.json());
};

export const SearchCastAPI = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
};

export const SearchReviewAPI = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => res.json());
};
