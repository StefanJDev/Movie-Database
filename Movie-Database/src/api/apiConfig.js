const key = import.meta.env.VITE_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';

const endpoints = {
  popular: `${baseURL}/movie/popular?api_key=${key}`,
  topRated: `${baseURL}/movie/top_rated?api_key=${key}`,
  upcoming: `${baseURL}/movie/upcoming?api_key=${key}`,
  trending: `${baseURL}/trending/movie/week?api_key=${key}`,
  comedy: `${baseURL}/search/movie?api_key=${key}&with_genres=35`,
  search: `${baseURL}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,
};

export default endpoints;
