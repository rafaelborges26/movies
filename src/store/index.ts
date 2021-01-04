import { createStore } from 'redux';
import { IMovieState, IMyList } from './modules/movies/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  movies: IMovieState;
  movieslist: IMyList;
}

const store = createStore(rootReducer);

export default store;
