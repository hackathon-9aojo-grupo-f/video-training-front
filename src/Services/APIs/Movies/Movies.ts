import api from '../Common/api';

const getMovies = (search: string) => api.get('/movies?searchTerm=' + search);
const getMovieInfo = (prodID: string) => api.get('/movies/' + prodID);

const moviesApi = {
  getMovies,
  getMovieInfo,
};

export default moviesApi;
