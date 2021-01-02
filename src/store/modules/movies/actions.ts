export function clickSearchMovie(movie: string | undefined): {} {
  return {
    type: 'CLICK_SEARCH_MOVIE',
    payload: {
      movie,
    },
  };
}
