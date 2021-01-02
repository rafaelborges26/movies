import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

export interface IState {
  movies: { movie: string };
}

const store = createStore(rootReducer);

export default store;
