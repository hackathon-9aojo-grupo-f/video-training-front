import moviesApi from './Movies';
import api from '../Common/api';

jest.mock('../Common/api');

describe('moviesApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getMovies', async () => {
    const movies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];

    jest.spyOn(api, 'get').mockResolvedValueOnce(movies);

    const searchTerm = 'action';
    const result = await moviesApi.getMovies(searchTerm);

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/movies?searchTerm=' + searchTerm);
    expect(result).toEqual(movies);
  });

  test('getMovieInfo', async () => {
    const movie = { id: 1, title: 'Movie 1' };

    jest.spyOn(api, 'get').mockResolvedValueOnce(movie);

    const prodID = '1';
    const result = await moviesApi.getMovieInfo(prodID);

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/movies/' + prodID);
    expect(result).toEqual(movie);
  });
});
