export interface IMovieState {
  movie: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: [];
    id: number;
    media_type?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video?: boolean;
    vote_average: string;
    vote_count?: string;
  };
}

export interface IMyList {
  movie: IMovieState[];
}
