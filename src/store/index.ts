import { createStore } from 'redux';
import { IMovieState } from './modules/movies/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  movies: IMovieState;
}

const store = createStore(rootReducer);

export default store;
