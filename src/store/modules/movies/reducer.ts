import { Reducer } from 'redux';
import { IMovieState } from './types';

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
      // console.log(teste);
      console.log('chegou');
      // eslint-disable-next-line no-param-reassign
      // state = {
      // id,
      // title,
      // vote_average,
      // release_date,
      // };

      // console.log(action.payload, 'teste');
      return movie;
    }
    default: {
      return state;
    }
  }
};

export default movies;
