import { IMyList } from './types';

export function clickMyList(listMovies: IMyList | undefined): {} {
  return {
    type: 'CLICK_MY_LIST',
    payload: {
      listMovies,
    },
  };
}
