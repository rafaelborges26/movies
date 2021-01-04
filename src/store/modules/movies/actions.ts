import { IMovieState, IMyList } from './types';

export function clickSearchMovie(movie: IMovieState | undefined): {} {
  return {
    type: 'CLICK_SEARCH_MOVIE',
    payload: {
      movie,
    },
  };
}
