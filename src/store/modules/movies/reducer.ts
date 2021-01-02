import { Reducer } from 'redux';

const INITIAL_STATE = 'teste';

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
