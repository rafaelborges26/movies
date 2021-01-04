import { Reducer } from 'redux';
import { IState } from '../..';
import { IMovieState, IMyList } from './types';

const INITIAL_STATE: IMyList = {
  movie: [],
};

const movies: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CLICK_MY_LIST': {
      const movieList = action.payload;
      return movieList;
    }

    default: {
      return state;
    }
  }
};

export default movies;
