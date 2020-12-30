import axios from 'axios';

const apiMovies = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/search',
});

export default apiMovies;
