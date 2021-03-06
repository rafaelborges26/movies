import { Reducer } from 'redux';
import { IState } from '../..';
import { IMovieState, IMyList } from './types';

const INITIAL_STATE: IMovieState = {
  movie: {
    id: 0,
    release_date: '2020/01/27',
    title: 'Filmes',
    vote_average: '5',
  },
};

const movies: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CLICK_SEARCH_MOVIE': {
      const movie = action.payload;
      return movie;
    }

    default: {
      return state;
    }
  }
};

export default movies;
